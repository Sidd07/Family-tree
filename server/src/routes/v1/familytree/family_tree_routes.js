'use strict';

const express = require('express');

const router = express.Router();

const list_families = require('./list_families');
const update_family_tree = require('./update_family_tree');
const delete_family = require('./delete_family');
const add_family = require('./add_family');


router.get('/v1/family_tree/all_families', list_families);

router.put('/v1/family_tree/:family_id', update_family_tree);

router.post('/v1/family_tree', add_family);

router.delete('/v1/family_tree/:family_id', delete_family);


module.exports = router;
