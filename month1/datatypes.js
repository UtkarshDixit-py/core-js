// primitive dataTypes
// number string boolean , null  and undefined symbol 

var a = 123;
var b = "abc";
var c = null; //object
var d = undefined;
var bool = false;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

//composite datatypes
// Objects, Functions 

var obj1={
    name : "Utkarsh",
    company : "full creative"
}

    function abc(i){
        console.log(i)
    }



//Symbol(PRIMITIVE)
let symbol1 = Symbol('symbol2');
let symbol2 = Symbol('symbol2');



console.log(symbol1===symbol2);
console.log(typeof symbol1);
console.log('symbol: ' + symbol1.toString());
console.log(typeof symbol1.toString());
 
//Use case  : Symbol as property keys
const MY_KEY = Symbol();
let obj = {};
obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);

//BigInt
let x = 100000000000000000;
let y = 10000000000000000000;

console.log(x*y); //1e+36

let x1 = 100000000000000000n;
let y1 = 10000000000000000000n;

console.log(x1*y1); //1000000000000000000000000000000000000n




