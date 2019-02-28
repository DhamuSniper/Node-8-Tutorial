var readlineSync=require('readline-sync');
var userEmail=readlineSync.question("Please Enter your mail ID:")
var emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var result=emailPattern.test(userEmail);
if(result){
  console.log("Good");
}
else{
  console.log("Bad");
}
