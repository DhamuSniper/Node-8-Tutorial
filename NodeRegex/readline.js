const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your Email Id: ', (answer) => {
  var emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z](?:[a-zA-Z-]{0,61}[a-zA-Z])?)*$/;
  var result=emailPattern.test(answer);
  if(result){
    console.log("Valid");
  }
  else{
    console.log("invalid");
  }

  rl.close();
});
