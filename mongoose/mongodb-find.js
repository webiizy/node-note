//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

/* var obj = new ObjectID;

console.log(`ID: ${obj} \n timestime: ${obj.getTimestamp()} `) */

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, (err,client)=> {
    if(err) {
        return console.log('Uanble connect to mongoDB');
    }
    console.log('connected to mongoDB server');

    var db = client.db('TodoApp');

    // find
   /*  db.collection('Todo').find({_id: new ObjectID('5b0e47d8da57b44735d21830')}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log('Unable to fetch collect Todos', err)
    }) */


   /*  db.collection('Todo').find().count().then((count)=>{
        console.log('Todos counted:',count);
        console.log();
    },(err)=>{
        console.log('Unable to fetch todos',err)
    }) */

    db.collection('Users').find({name: 'Andrew'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2))
    })
   
    client.close();
})
