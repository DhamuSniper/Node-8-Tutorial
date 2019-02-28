var http=require('http');
var currentDate=require('./MySystemDate.js');
http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/html'});
  res.write(currentDate.mySystemDate());
  res.end();
}).listen(8080);
