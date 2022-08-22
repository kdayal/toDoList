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
async function getListItem(id) {
    try {
        const query = `
        SELECT * FROM listItems WHERE id = ? `;
        const [listItems] = await db.query(query, [id]);
        return listItems;
    } catch(error) {
        console.log(error);
    }
}
async function updateListItem(listItem, id) {
    try {
        const query = `
        UPDATE listItems SET name = ? , list_id = ?
        WHERE id = ?
        `;
        const result = await db.query(query, [listItem.name, listItem.listId, id]);
        return {affectedRows: result[0].affectedRows};
    } catch (error) {
        console.log(error);
    }
}
async function deleteListItem(id) {
    try {
        const result = await db.query(`
            DELETE FROM listItemComments WHERE list_item_id = ?;
            DELETE FROM listItems WHERE id = ?;
        `, [id, id]);
        return result;
    } catch (error) {
        console.log(error);
    }
}
module.exports  = {
    addListItem , getListItem, updateListItem , deleteListItem
}