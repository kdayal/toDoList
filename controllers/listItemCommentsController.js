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
async function getListItemComments(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const listItemComments = await listItemCommentsModel.getListItemComments(req.params.id);

    const listItemData = {
        ...listItemComments[0],
        date: listItemComments[0].date.toISOString(),
        humanReadableData: listItemComments[0]. date.toISOString('en-us' ,{
            weekday: 'long' ,
            year: 'numeric' ,
            month: 'long',
            day: 'numeric'
        })
    };
    res.json({listItemComments: listItemData});
}  

module.exports  = {
    addListItemComments , getListItemComments






    
}