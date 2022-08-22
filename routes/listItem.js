const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const listItemController = require('../controllers/listItemController');

router.post('/listItems',
    body('listId').trim().escape().not().isEmpty(),
    body('status').trim().escape().not().isEmpty(),
    body('priority').trim().escape().not().isEmpty(),
    body('name').trim().escape().not().isEmpty(),
    listItemController.addListItem
);

router.get('/listItem/:id', 
    param('id').notEmpty().isInt({min:1}),
    listItemController.getListItem
);
router.put('/listItem/:id', 
    param('id').notEmpty().isInt({min:1}),
    body('listId').trim().escape().not().isEmpty(),
    body('status').trim().escape().not().isEmpty(),
    body('priority').trim().escape().not().isEmpty(),
    body('name').trim().escape().not().isEmpty(),
    listItemController.updateListItem
);
router.delete('/listItem/:id',
    param('id').notEmpty().isInt({min:1}),
    listItemController.deleteListItem
);
module.exports = router;