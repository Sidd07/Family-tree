const Res_Format = require('../../../helpers/res_format');
const db_connection = require('../../../helpers/db');
const { ObjectId } = require('mongodb');


/**
 * route handler to delete the family
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const route_handler = async (req, res, next) => {
    const { collection, client } = await db_connection();
    const { family_id } = req.params;
    try {

        await collection.remove({ '_id': ObjectId(family_id) });

        const res_format = new Res_Format('Family deleted.')
            .customMeta({
                message: 'Successfully deleted family.',
            });

        return res.status(res_format.getStatus()).json(res_format.log());
    } catch (error) {
        const res_format = new Res_Format(error);
        return res.status(res_format.getStatus()).json(res_format.log());
    } finally {
        client.close();
    }

}

module.exports = route_handler