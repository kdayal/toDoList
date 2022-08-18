const listModel = require('./../models/listModel');
const { validationResult } = require('express-validator');

async function addList(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = [
        req.body.name,
        req.body.userId
    ];
    const result = await listModel.addList(data);
    res.json(result);
}
async function getList(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const lists = await listModel.getList(req.params.id);

    const listData = {
        ...lists[0],
        date: lists[0].date.toISOString(),
        humanReadableData: lists[0]. date.toISOString('en-us' ,{
            weekday: 'long' ,
            year: 'numeric' ,
            month: 'long',
            day: 'numeric'
        })
    };
    res.json({list: listData});
}  
async function updateList(req,res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await listModel.updateList({
        name: req.body.name ,
        userId: req.body.userId
    }, req.params.id);
    res.json(result);
}

module.exports = {
    addList, getList, updateList
}