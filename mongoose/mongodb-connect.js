//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

var obj = new ObjectID;

console.log(`ID: ${obj} \n timestime: ${obj.getTimestamp()} `)

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, (err,client)=> {
    if(err) {
        return console.log('Uanble connect to mongoDB');
    }
    console.log('connected to mongoDB server');

    var db = client.db('TodoApp');

   /*  db.collection('Todo').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result)=>{
        return (err)?console.log('Uanble insert data'): console.log(JSON.stringify(result.ops,undefined,2));
    });
     */

    // insert new doc to Users
   /*  db.collection('Users').insertOne({
        name:'Andrew',
        age: 25,
        location: "Philadenphia"
    }, (err,result) => {
        assert.equal(null, err,' Unable connect to db');
        assert.equal(1,result.result.n, 'Insert failed')
        console.log(JSON.stringify(result.ops,undefined,2))
        console.log(result.ops[0]._id.getTimestamp());
    })

    client.close(); */
})
