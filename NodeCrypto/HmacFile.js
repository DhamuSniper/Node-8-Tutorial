var crypto=require('crypto');
var fs=require('fs');

var alogorithm="sha1";
var hash=crypto.createHmac(alogorithm,"secret");

var filename="Sample2.txt";
var file_data=fs.ReadStream(filename);

file_data.on('data',function(data){
  hash.update(data);
})

file_data.on('end',function(){
  var gen_hmac=hash.digest('hex');
  console.log(gen_hmac);
  fs.writeFileSync(filename,gen_hmac);
})
