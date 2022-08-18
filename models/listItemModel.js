const db = require('./../data/database');

async function addListItem(postData) {
    try {
        const result = await db.query('INSERT INTO listItems (name, list_id, status,priority) VALUE(?);' , [
            postData,
        ]);
        console.log('Inside addListItem');
        console.log(result);
        return {id: result[0].insertId};
    } catch (error) {
        console.log(error);
    }
}
module.exports  = {
    addListItem
}