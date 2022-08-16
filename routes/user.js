const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');

router.get('/healthcheck', userController.healthCheck);

router.post('/users' , userController.addUser);

module.exports = router;
