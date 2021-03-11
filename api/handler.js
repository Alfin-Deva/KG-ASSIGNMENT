const database = require('./db');
exports.makeAppoinment = (req,res)=>{
    console.log("req--->",req.body);
database.insert(req,res);
    // const collection = database.collection('myDB');
    // collection.insertOne(req.body).then(response=>{
    //     res.send(response);
    // })
    // res.send({'sendResponse':true});
}

exports.getAppoinment = (req,res)=>{
    console.log("res--->",req.body);
    database.find(req,res);
}
