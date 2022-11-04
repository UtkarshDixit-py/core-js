// var a = 12; //global scope

// let b = 11; // block scope

// const c = 15; //block scope


function scope(){
    let sc = 10;
}
// console.log(sc); //not defined because inside functions var let and const become function scoped/local scoped

//HOISTING
// ------------
var x;
console.log(x); // undefined

x = 23;
// ------------
hoistedVariable = 3;
console.log(hoistedVariable);  //3

var hoistedVariable;
// ------------

function hoistingExample() {  
    console.log(a); 
    } 
console.log(a);
var a = 1;
hoistingExample();

a1 = 10;
console.log(a1);
var a1;

a2 = 10;
console.log(a2);
// let a2; //error because can not access hoisted let variable before intialising it

a3 = 10;
console.log(a3);
// const a3; //error because can not declare const without intialisation


var a = 1;

function foo() {
    a = 2;  // <=== Which `a` should be assigned to?
    console.log(a);
    
    // code
    // code
    // let a = 3;
    console.log(a);
}

console.log("foo",a)

foo();

console.log("foo",a)
console.log("-------------")
var variable = 10;
(()=>{
   console.log(variable);   //10
   variable = 20;
   console.log(variable);   //20
})();

console.log(variable);
var variable = 30;


var variable = 10;
variable_3 = 35;
(()=>{
   
   console.log(variable_3); //undefined
    variable_3 = 45;
    variable_2 = 15;
   console.log(variable);  //10 
})();

console.log(variable_2); // 15
console.log(variable_3); //45
var variable=30;


console.log("NaN type ->",typeof NaN);
console.log("convert non numeric string to number" , Number("string"));
console.log("isNaN", isNaN(Number("string")));


//"USE STRICT "

(function myFunction(){
    // "use strict";
    //  y = 2; // will throw error that y is not defined
    //  var y; //will not throw erorr if it has been declared

    //  delete y; //error, cannot delete y in strict mode
})()

// var func = function abc(a,a,c){
//     "use strict";
//     // return a  +  c; // throws error
// } 

// console.log("func strict",func(5,4,3));

var ab = 17;
var evalAb = eval("'use strict'; var ab = 42; ab;");
console.log("ab",ab);
console.log("evalAb",evalAb);


//CONVERSION 

var one = 1;
var two = '2';
console.log("one plus two = ",one+two)

// String conversion
console.log("-------string coercion--------")

String(123) //explicit conversion -> '123'
123+'' //implicit ->'123' 
console.log(String(null));


//Boolean Conversion
console.log("-------Boolean coercion--------")
// in logical context like if(){} or by logical operator

console.log("boolean conversion",(Boolean(2))); //explicit conversion -> true

(function f() {
    var x;
    var a = x;
    console.log(Boolean(a = Number(12.34)));
})()

// all falsy values 
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

//all truth values
Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true




//Number Coercion
console.log("-------Number coercion--------")

console.log(Number("string")); //Nan
console.log(Number("15"));//15
console.log(Number("0")); //0
console.log(Number("")); //0
console.log("------------")


//COERCION
if ([]) {
    console.log("[] is truthy");
  }
  if ([] == false) {
    console.log("[] == false");
  }
  // [] is truthy
  // [] == false
  

  console.log([1,2,3] == [1,2,3]); //false

//OPERATORES 
 
// Arithmetic operators are used to perform arithmetic on numbers:
        var num1 = 2;
        var num2 = 9;

        console.log(num1 + num2);
        console.log(num1 - num2);
        console.log(num1 * num2);
        console.log(num1 / num2);
        console.log(num1 ** num2);
        console.log(num1++);
        console.log(++num1);
        console.log(num1--);
        console.log(--num1);

// Assignment operators assign values to JavaScript variables

let number = 55;
let newNumber = number;


// JavaScript Comparison Operators === , ==, !=, !== , > etc
let c1 = 12;
let c2 = 15;
let c3 = "15";
if(c2==c3){
    console.log("normal comparison")
}
else if(c2===c3){
    console.log("strict comparison")
}if(c2!=c3){
    console.log("not equal to strict comparison")
}

//ternary operator 
// condition ? exprIfTrue : exprIfFalse

var ternary = 15;
undefined == false ? console.log("true") : console.log("false");
[] ? console.log("true") : console.log("false");

// Note that truthiness is not the same as being loosely equal to true or false.

[] == false ? (console.log("true")) : (console.log("false"));




// logical operator && || ??

var v1 = 10;
var v2 = 20;

if(v1 < 50 && v2 < 50){
    console.log("both are less than 50");
}
if(v1 < 50 || v2 > 50){
    console.log("only one condition is true")
    console.log(v2)
}


//?? nullish colescing operator
const nullish = null ?? "string";
console.log(nullish);


const nullish1 = 0 ?? 42;
console.log(nullish1);


var x = 220;
var y = "string";
var z = undefined;
console.log(y || x)

console.log(y+z);

//Unary Op

//delete 
var deleteThis ={name:"okokok"} 
console.log("before deleting",deleteThis);

delete deleteThis.name

console.log("after deleting",deleteThis);


//typeof

var typeA = 10;
var typeB = Symbol(typeB);

console.log(typeof typeA);
console.log(typeof typeB);







