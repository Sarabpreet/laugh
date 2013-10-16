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


var type=typeof null; // and this is an object
console.log(type);

var typearray=typeof []; // this is an object too!
console.log(typearray); 


//v8 provides a way of identify array though. 

function something() {

var typefunc = typeof something;
console.log("this is "+typefunc);

}

something(); //now this will say its a function.


//////call and appy in functions///// 


//The value of this is the global oject
function a(){

 if(window==this) {

 	console.log("yes");  //it says yes, that means window==this is true!
 };
}

a();

function a() {

if(	this.a=='b') {  //which is true as well !! 

	console.log("yes this is true"); 
}
}

a.call({a:'b'});

// please note the diffrence between call and apply : 

//call : takes a list of parameter 
//apply: takes an array



//closures 

//everytime a function is called a new scope is defined 


var a=5;

function woot() {
	if(a==5){
	console.log("true hai");
	}
	//true

var a=6;

function test() {
if(a==6){
	console.log("true hai second wala");
	}


}
test();
};

woot();

*/


//Classes  (there is no class keyword in javascript its defined like function instead)


//function someClass() {} 


