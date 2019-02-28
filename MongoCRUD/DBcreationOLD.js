var mongo=require('mongodb');
var newDB="mongodb://localhost:27017/demoDB";

mongo.connect(newDB,(error,db)=>{
  if(error){
    throw error;
  }
  console.log("Db has been created and connected successfully");
  db.close();
})
