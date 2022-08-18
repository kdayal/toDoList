const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const listController = require('../controllers/listController');

router.post('/lists',
    body('name').trim().escape().not().isEmpty(),
    body('userId').trim().escape().not().isEmpty(),
    listController.addList
);
router.get('/list/:id', 
    param('id').notEmpty().isInt({min:1}),
    listController.getList
);

module.exports = router;