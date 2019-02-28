var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/html'});
  fs.readFile('practiceNode.html',(err,data)=>{
    if (err){
      throw err;
    }
    res.end(data);
  });

}).listen(3000);
