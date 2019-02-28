var crypto = require('crypto');
var fs =require('fs');

var alogorithm="sha1";
var hash=crypto.createHash(alogorithm);

var filename="Sample.txt";
var file_data=fs.ReadStream(filename);

file_data.on('data',function(data){
  hash.update(data);
})

file_data.on('end',function(){
  var gen_hash=hash.digest('hex');
  console.log(gen_hash);
  fs.writeFileSync(filename,gen_hash);
})
