const db = require('./../data/database');

async function addList(postData) {
    try {
        const result = await db.query('INSERT INTO lists (name, user_id) VALUE(?);' , [
            postData,
        ]);
        console.log('Inside addlist');
        console.log(result);
        return {id: result[0].insertId};
    } catch (error) {
        console.log(error);
    }
}

async function getList(id) {
    try {
        const query = `
        SELECT * FROM lists WHERE id = ? `;
        const [lists] = await db.query(query, [id]);
        return lists;
    } catch(error) {
        console.log(error);
    }
}
async function updateList(list, id) {
    try {
        const query = `
        UPDATE lists SET name = ? , user_id = ?
        WHERE id = ?
        `;
        const result = await db.query(query, [list.name, list.userId, id]);
        return {affectedRows: result[0].affectedRows};
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addList , getList , updateList
}