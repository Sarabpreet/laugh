/*

//types 


*Primitive type: 

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




var a=['hello',"world",20]; // an array of strings mixed with number 
var b=a; 
b[0]="world"; // changing the value of array 0 to "world"


console.log(a);

// PS: In JS, Complex type is reffrence type. means if you will change the value of b, it will change the value of a as well.  
// this does'nt happens in primitive type. (it copies the value.)


*/


var a="woot";
var b= new String("woota");
b=a;
console.log(a+b);

