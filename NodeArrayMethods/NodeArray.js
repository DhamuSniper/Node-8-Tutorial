var a=[1,3,4,6,7,8];
console.log("before push",a);
a.push('u');
console.log("after push",a);

var b=[1,3,4,5,6,7];
console.log("before pop",b);
b.pop();
console.log("after pop",b);
var a=[1,3,4,6,7,8];
console.log("before unshift",a);
a.unshift('u');
console.log("after unshift",a);

var b=[1,3,4,5,6,7];
console.log("before shift",b);
b.shift();
console.log("after shift",b);

var a=[1,2,3,4,5,6,6,7,8,9];
console.log("before reverse",a);
a.reverse();
console.log("after reverse",a);

var a=[8,7,48,4545,4545,33434,7.8,9.1,0.45];
console.log("before sort",a);
a.sort();
console.log("after sort",a);

var a=["python", "nodejs","php","Django"];
console.log("before splice",a);
a.splice(2,1,"Express");
console.log("after splice",a);
