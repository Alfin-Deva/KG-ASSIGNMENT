module.exports = (app) =>{
    const handler = require('./handler');
    app.post ('/users',handler.makeAppoinment);
   app.post('/getUsers',handler.getAppoinment);
 }