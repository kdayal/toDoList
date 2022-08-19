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
async function getListItem(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const listItems = await listItemModel.getListItem(req.params.id);

    const listItemData = {
        ...listItems[0],
        date: listItems[0].date.toISOString(),
        humanReadableData: listItems[0]. date.toISOString('en-us' ,{
            weekday: 'long' ,
            year: 'numeric' ,
            month: 'long',
            day: 'numeric'
        })
    };
    res.json({listItem: listItemData});
}  
module.exports = {
    addListItem ,getListItem
}