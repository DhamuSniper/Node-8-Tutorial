var fs=require('fs');
var filename="Sample.html";
var str=fs.readFileSync(filename).toString();
var pattern=/<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
var myarray=str.match(pattern);
var len=myarray.length;
console.log(len);
