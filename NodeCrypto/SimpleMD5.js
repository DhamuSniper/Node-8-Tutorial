var crypto =require('crypto');
var hash=crypto.createHash('md5');
var data=hash.update('Dhamu','utf-8');
var gen_hash=data.digest('hex');
console.log(gen_hash);
