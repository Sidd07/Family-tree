// Environment variables
require('dotenv').config();

// import all packages
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app_routers = require('./src/routes/v1/familytree/family_tree_routes')


// configure app server
const app = express();
app.set('port', process.env.PORT);
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ limit: '1gb', extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '1gb' }));
app.use(cors());
app.use('/', app_routers)


// starting server
app.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')}`);
});