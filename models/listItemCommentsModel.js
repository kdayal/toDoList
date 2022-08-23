const db = require('./../data/database');

async function addListItemComments(postData) {
    try {
        const result = await db.query('INSERT INTO listItemComments ( list_item_id, comment) VALUE(?);' , [
            postData,
        ]);
        console.log('Inside addListItemComments');
        console.log(result);
        return {id: result[0].insertId};
    } catch (error) {
        console.log(error);
    }
}
module.exports  = {
    addListItemComments
}