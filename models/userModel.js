const db = require('./../data/database');

async function addUser(postData) {
    try {
        const result = await db.query('INSERT INTO users (name, email) VALUE(?);' , [
            postData,
        ]);
        console.log('Inside addUser');
        console.log(result);
        return {id: result[0].insertId};
    } catch (error) {
        console.log(error);
    }
}

async function getUser(id) {
    try {
        const query = `
        SELECT * FROM users WHERE id = ? `;
        const [users] = await db.query(query, [id]);
        return users;
    } catch(error) {
        console.log(error);
    }
}
async function updateUser(user,id) {
    try {
        const query = `
        UPDATE users SET name = ? , email = ?
        WHERE id = ?
        `;
        await db.query(query, [user.name, user.email, id]);
    } catch (error) {
        console.log(error);
    }

}
async function deleteUser(id) {
    try {
        const result = await db.query('DELETE FROM users WHERE id = ?', [id]);
        return {affectedRows: result[0].affectedRows};
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addUser , getUser , updateUser , deleteUser
};

    