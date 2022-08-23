const listItemCommentsModel = require('./../models/listItemCommentsModel');
const { validationResult } = require('express-validator');

async function addListItemComments(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data =  [
        
        req.body.listItemId,
        req.body.comment
        
    ];
    const result = await listItemCommentsModel.addListItemComments(data);
    res.json(result);
}

module.exports  = {
    addListItemComments
}