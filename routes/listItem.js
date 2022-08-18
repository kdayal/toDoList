const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const listItemController = require('../controllers/listItemController');

router.post('/listitems',
    body('listId').trim().escape().not().isEmpty(),
    body('status').trim().escape().not().isEmpty(),
    body('priority').trim().escape().not().isEmpty(),
    body('name').trim().escape().not().isEmpty(),
    listItemController.addListItem
);
module.exports = router;