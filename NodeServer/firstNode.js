var http=require('http');

var host='127.0.0.1';
var port='3000';

var server=http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'text/html'});
  console.log("Server is running!!");
  res.end("Hello Dhamu!");
});
server.listen(port,host,(error)=>{
  if(error){
    return error;
  }
  console.log("Server listening");
});
