var http=require('http');

http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'application/json'});
  let sampleJson={
    status:200,
    friends:['yuva','rafi','ashok'],
    code:2000
  }
  res.end(JSON.stringify(sampleJson));
}).listen(3000);
