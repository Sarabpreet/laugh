/* 				Practising Basic JavaScript (Syntax's and Concepts)

//types 


*Primitive type: 
-> Which includes number boolean, string, null and undefined.
var  a=10;
var  b=a;
var  b=20;


// a will be 10 &
//b will be 20


console.log("b is "+b+" & a is "+a);


*/

/*

//types 


//-------------------------------------------------
//*Complex type
-> which includes Array, Function, Object



var a=['hello',"world",20]; // an array of strings mixed with number 
var b=a; 
b[0]="world"; // changing the value of array 0 to "world"


console.log(a);

// PS: In JS, Complex type is reffrence type. means if you will change the value of b, it will change the value of a as well.  
// this does'nt happens in primitive type. (it copies the value.)


*/

var a="woot";
var b= new String("woota");

console.log(typeof a); //String
console.log(typeof b); //Object

var j= a instanceof String;
var k= b instanceof String;

//a.substr == b.substr  is true.

if(a.substr == b.substr) {

var l=true;
	console.log("yes");
}


console.log(j); //False
console.log(k);  //True

