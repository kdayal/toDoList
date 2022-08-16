const userModel = require('./../models/userModel');
const { validationResult } = require('express-validator');

async function healthCheck(req, res) {
    res.json({'working': true})
}

async function addUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = [
        req.body.name,
        req.body.email
    ];
    const result = await userModel.addUser(data);
    res.json(result);
}

async function getUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const users = await userModel.getUser(req.params.id);

    const userData = {
        ...users[0],
        date: users[0].date.toISOString(),
        humanReadableData: users[0]. date.toISOString('en-us' ,{
            weekday: 'long' ,
            year: 'numeric' ,
            month: 'long',
            day: 'numeric'
        })
    };
    res.json({user: userData});
}  
   
async function updateUser(req,res) {
    await userModel.updateUser({
        name: req.body.name ,
        email: req.body.email
    }, req.params.id);
}

async function deleteUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await userModel.deleteUser(req.params.id);
    res.json(result);
}

module.exports = {
    healthCheck, addUser, getUser, updateUser, deleteUser
};