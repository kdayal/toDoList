const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');

const userController = require('./../controllers/userController');

router.get('/healthcheck', userController.healthCheck);
router.post('/users',
    body('email').isEmail().normalizeEmail(),
    body('name').trim().escape().not().isEmpty(),
    userController.addUser
);
router.get('/user/:id', 
    param('id').notEmpty().isInt({min:1}),
    userController.getUser
);
router.delete('/user/:id',
    param('id').notEmpty().isInt({min:1}),
    userController.deleteUser
);

module.exports = router;
