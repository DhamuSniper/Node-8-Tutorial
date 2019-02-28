var lineReader=require('line-reader');
var fs=require('fs');
lineReader.eachLine("CDF_BTIL_US_PROV_MATH_20180919_2018-09-09.csv",function(line,last){
    var array=line.split(",");
    console.log(array[2]);
  
});