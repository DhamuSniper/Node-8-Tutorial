var express=require('express');
var app=express();

app.get('/',function(req,res){
  console.log("This is home page");
  res.send("Homepage");
});
app.get('/signup',function(req,res){
  console.log("This is sign up page");
  res.send("Signup Page");
});
app.get('/login',function(req,res){
  console.log("This is login page");
  res.send("login page");
});
app.listen(3000,function(){
  console.log("server is running successfully!");
});
