const Res_Format = require('../../../helpers/res_format');
const db_connection = require('../../../helpers/db');
const Joi = require('joi');

/**
 * route handler to add a new family
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const route_handler = async (req, res, next) => {
    const { collection, client } = await db_connection();

    try {

        await validate_body(req.body);

        const created_record = await collection.insertOne(req.body);

        const res_format = new Res_Format(created_record.ops[0])
            .customMeta({
                message: 'Successfully created family.',
            });

        return res.status(res_format.getStatus()).json(res_format.log());
    } catch (error) {
        const res_format = new Res_Format(error);
        return res.status(res_format.getStatus()).json(res_format.log());
    } finally {
        client.close();
    }

};


/**
 * Validate body
 * @param {*} body 
 */
const validate_body = async (body) => {
    try {

        //construct schema for valiation
        const schema = Joi.object({
            id: Joi.string().required(),            
            name: Joi.string().required(),
            familyName: Joi.string().required(),
            level: Joi.number(),
            relation: Joi.string(),
            gender: Joi.string().required(),
            totalMembers: Joi.number().required(),
            family: Joi.array().required(),
        });

        // validate body against schema
        const validation_error = schema.validate(body);

        // if error occurs then throw error
        if (validation_error.error) {
            throw validation_error.error
        }

    } catch (err) {
        console.log(err);
        const error = new Error("Invalid params in body");
        error.description = err;
        error.status = 400;
        throw error;
    }
};

module.exports = route_handler