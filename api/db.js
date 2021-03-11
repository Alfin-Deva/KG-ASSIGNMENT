const mongodb = require('mongodb');
var database;

mongodb.connect('mongodb://localhost:27017/KG-ASSIGNMENT',{  useNewUrlParser:true,
useUnifiedTopology: true},(error,connection)=>{
if(connection){
    database = connection.db('KG-ASSIGNMENT')
    console.log("DB Connected Successfully..!",database.databaseName)
}
})
exports.insert = (req,res)=>{
    const collection = database.collection('bookingSlots');
    collection.find({fromTime:req.body.fromTime}).toArray((error,result)=>{
        console.log("result----->",result);
if(result.length == 0){
    collection.insertOne(req.body).then(response=>{
        console.log("insert Response",response.ops[0]);
        res.send(response.ops[0]);
    })
}else{
    res.send({
        error:'Already Timeslot Exist'
    })
}
})
}


exports.find = (req,res)=>{
    const collection = database.collection('myDB');
    collection.find().toArray((error,result)=>{
        if(error){
            console.log(error)
        }
        if(result){
            res.send(result);
        }
    })
}
// module.exports = {
//     database
// } = 