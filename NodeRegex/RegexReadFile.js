var fs=require('fs');
var filename="Sample.txt";
var str=fs.readFileSync(filename).toString();
var pattern=/man/gim
var myarray=str.match(pattern);
var len=myarray.length;
console.log(len);
