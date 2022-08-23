const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const listItemCommentsController = require('../controllers/listItemCommentsController');

router.post('/listItemsComments',
    body('listItemId').trim().escape().not().isEmpty(),
    body('comment').trim().escape().not().isEmpty(),
    //body('priority').trim().escape().not().isEmpty(),
   // body('name').trim().escape().not().isEmpty(),
    listItemCommentsController.addListItemComments
);
router.get('/listItemComments/:id', 
    param('id').notEmpty().isInt({min:1}),
    listItemCommentsController.getListItemComments
);
module.exports = router