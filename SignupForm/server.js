 // Imports Packages using require Method

var express=require('express');
var mongo=require('mongodb');
var bodyParser=require('body-parser');//this is used to extract the body portion of incoming stream and send to req.body
var path=require('path');
var crypto=require('crypto')
// staring express app
var app=express();
var newDB="mongodb://localhost:27017/Signup_project";
//starting server in localhost:3000
app.get('/',function(req,res){
  res.set({
    'Access-Control-Allow-Origin':'*'
  });
  return res.redirect('/public/index.html');
}).listen(3000);

app.use('/public',express.static(__dirname+'/public'));//express.static middleware is used to serve stactic files such as images,css html and js files.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));
//Hmac-ing input password with phone as SECRET key
var getHash=(pass,phone)=>{
  var hmac=crypto.createHmac('sha1',phone);
  var data=hmac.update(pass);
  var gen_hmac=data.digest('hex');
  return gen_hmac;
}
//Post method for injecting information to DB(mongodb)
app.post('/sign_up',function(req,res){
  var name=req.body.name;
  var email=req.body.email;
  var pass=req.body.password;
  var phone=req.body.phone;
  var password=getHash(pass,phone);

  var data={
    "name":name,
    "email":email,
    "password":password,
    "phone":phone
  }
  mongo.connect(newDB,function(error,db){
    if(error){
      throw error;
    }
    console.log("Mongodb is connected!!")
    db.collection("details").insertOne(data,(err,collection)=>{
      if (err) throw err;
      console.log(collection);
    });
  });
  res.set({
    'Access-Control-Allow-Origin':'*'
  });
  return res.redirect('/public/success.html');
});
