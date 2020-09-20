const mongo_client = require('mongodb').MongoClient;


/**
 * get a mongodb connection
 */
const get_db_connection = async () => {

    try {
        const client = await mongo_client.connect(process.env.DATABASE_URL, { useUnifiedTopology: true });

        const db = client.db(process.env.DATABASE_NAME);

        const family_collection = db.collection('family');

        return { collection : family_collection, client: client }

    } catch (error) {
        console.error(error);
    }

};

module.exports = get_db_connection