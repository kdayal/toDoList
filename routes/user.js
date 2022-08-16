const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController');

router.get('/healthcheck', userController.healthCheck);

router.post('/users' , userController.addUser);

router.get('/user/:id', userController.getUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
