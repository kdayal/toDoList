const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const userController = require('./../controllers/userController');

router.get('/healthcheck', userController.healthCheck);

router.post('/users',
    body('email').isEmail(),
    body('name').trim().escape().not().isEmpty(),
    userController.addUser
);
router.get('/user/:id', userController.getUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
