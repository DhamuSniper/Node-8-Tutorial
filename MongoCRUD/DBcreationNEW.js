const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');

const url='mongodb://localhost:27017';
const dbName='MyProject';

MongoClient.connect(url,function(err,client){
  assert.equal(null,err);
    console.log("connected successfully to server");
    const db=client.db(dbName);
    client.close();

})
