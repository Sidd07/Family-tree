const Res_Format = require('../../../helpers/res_format');
const db_connection = require('../../../helpers/db');
const { ObjectId } = require('mongodb');
const Joi = require('joi');


/**
 * route handler to update the family tree
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const route_handler = async (req, res, next) => {
    const { collection, client } = await db_connection();

    try {
        const { family_id } = req.params;

        const family_data = req.body;

        // validate body
        await validate_body(family_data.family);

        // updated record 
        const updated_record = await collection.findOneAndUpdate({ '_id': ObjectId(family_id) }, { $set: { 'family': family_data.family } }, { returnOriginal: false });

        const res_format = new Res_Format(updated_record.value)
            .customMeta({
                message: 'Successfully updated family.',
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
            family: Joi.array().required()
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