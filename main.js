//Logical operator(AND &&),(OR ||),(NOT !)
var a = 10;
var b = 5;
var c = "5";
//@ts-ignore
console.log((b != c) || (b === c)); //false
//false||false
var d = 10;
var e = 5;
var f = "5";
//@ts-ignore
console.log((d != f) && (e == f)); //true
//true&&true
var g = 25;
var h = 10;
var i = "5";
//@ts-ignore
console.log((h < g) || (h == i)); //true
//true||false
var j = 25;
var k = 10;
var l = "5";
//@ts-ignore
console.log((j === k) && (k != l)); //false        
//false&&true
var m = 20;
var n = 20;
var o = "8";
//@ts-ignore
console.log(!((m <= n) || (m !== o))); //false
//!((true)||(true))
