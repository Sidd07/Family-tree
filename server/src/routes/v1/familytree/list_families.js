const Res_Format = require('../../../helpers/res_format');
const db_connection = require('../../../helpers/db');


/**
 * route handler to get the list of families
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const route_handler = async (req, res, next) => {
    const { collection, client } = await db_connection();
    try {

        const all_families = await collection.find({}).toArray();

        const res_format = new Res_Format(all_families)
            .customMeta({
                message: 'Successfully retrieved all families.',
            });

        return res.status(res_format.getStatus()).json(res_format.log());
    } catch (error) {
        return next(error);
    } finally {
        client.close();
    }

}

module.exports = route_handler