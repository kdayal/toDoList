const listItemModel = require('./../models/listItemModel');
const { validationResult } = require('express-validator');

async function addListItem(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = [
        req.body.name,
        req.body.listId,
        req.body.status,
        req.body.priority
    ];
    const result = await listItemModel.addListItem(data);
    res.json(result);
}
module.exports = {
    addListItem 
}