const userModel = require('./../models/userModel');
async function healthCheck(req, res) {
    res.json({'working': true})
}

async function addUser(req, res) {
    const data = [
        req.body.name,
        req.body.email
    ];
    const result = await userModel.addUser(data);
    res.json(result);
}

async function getUser(req, res) {
    const users = await userModel.getUser(req.param.id);

    const userData = {
        ...users[0],
        date: users[0].date.toISOString(),
        humanReadableData: users[0]. date.toISOString('en-us' ,{
            weekday: 'long' ,
            year: 'numeric' ,
            month: 'long',
            day: 'numeric'
        })
    };
    res.render('user-detail', {user: userData});

      }  
   

   async function updateUser(req,res) {
    await userModel.updateUser({
        name: req.body.name ,
        email: req.body.email
    }, req.param.id);
    res.redirect('/users');
    }
   
    async function deleteUser(req, res) {
        await userModel.deleteUser(req.params.id);
        res.redirect('/users');
    }

module.exports = {
    healthCheck, addUser, getUser, updateUser, deleteUser
};