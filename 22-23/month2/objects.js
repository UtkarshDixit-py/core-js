const person ={
    name : "utkarsh",
    company : "full creative",

    introduction(){
        console.log("hello----first")
    }
}

console.log(person["name"])
console.log(person.name)
console.log(person.introduction());

person.age = 22;

console.log(person.age); //says "undefined";
// console.log(person.age[0]); // throws type error because trying to acess undefined


//diff in dot and bracket notation
var objName = "company";

console.log(person.objName); // undefined 
console.log(person[objName]); // "utkarsh"

var dataName = "height"
var dataValue = "1.75m"

person[dataName] = dataValue;

console.log(person);




function abcd(){
    console.log("Hi, my i am", this.name);
}

abcd();

//Protoype------------
//The prototype property allows you to add 
//properties and methods to any object .

let car1 = {
    model : "something",
    mileage : "k89089"
}

let car2={
    model : "okokok",
}

console.log("car2.__proto__",car2.__proto__ );
car2.__proto__ = car1; //protoypal inheritance
console.log("car2.__proto__",car2.__proto__ );

console.log("car 2 mileage",car2.mileage)

//another example
function book(title, author) {
    this.title = title; 
    this.author  = author;
 }

    var myBook = new book("Perl", "Mohtashim");
    book.prototype.price = null;
    myBook.price = 100;
    console.log(myBook);



// function createPerson(name){
//     this.name = name;
//     this.introduction = function(){
//         console.log(`Hi I am ${this.name}`)
//     };
// }

// const aviObj2 = new createPerson("avi");
// console.log(aviObj2.name);



// var superHeros = {
//     "squadName" : "Super Hero Squad",
//     "homeTown" : "Metro City",
//     "formed" : 2016,
//     "secretBase" : "Super tower",
//     "active" : true,
//     "members" : [
//       {
//         "name" : "Molecule Man",
//         "age" : 29,
//         "secretIdentity" : "Dan Jukes",
//         "powers" : [
//           "Radiation resistance",
//           "Turning tiny",
//           "Radiation blast"
//         ]
//       },
//       {
//         "name" : "Madame Uppercut",
//         "age" : 39,
//         "secretIdentity" : "Jane Wilson",
//         "powers" : [
//           "Million tonne punch",
//           "Damage resistance",
//           "Superhuman reflexes"
//         ]
//       },
//       {
//         "name" : "Eternal Flame",
//         "age" : 1000000,
//         "secretIdentity" : "Unknown",
//         "powers" : [
//           "Immortality",
//           "Heat Immunity",
//           "Inferno",
//           "Teleportation",
//           "Interdimensional travel"
//         ]
//       }
//     ]
//   }

//   console.log(typeof superHeros );

//   var parsed = JSON.stringify(superHeros);

//   console.log(typeof parsed);


// CALL APPLY BIND and this keyword

const obj1 = {
    name:"utkarsh",
}

const obj2 = {
    name:"rahul"
}

function greeting(age,company){
    console.log("hello i am ", this.name , age , company);
}

greeting.call(obj1, "21" ,"full creative");
greeting.call(obj2);


var calling = greeting.bind(obj1);

greeting.apply(obj1,["56","full"])


function objj1(){
    this.n = "name1";
    this.surname = "surname1";
    this.greet  = function(hometown,pincode){
        console.log("hello " + this.n +" "+ this.surname+" here " + "from " + hometown + pincode);
    }
}


function objj2(){
    this.n = "name2";
    this.surname = "surname2";
}


var o1 = new objj1();
var o2  = new objj2();
o1.greet.call(o2,"chandigarh","140603");


//why to use call 
//1) contructors can be chained 
//eg
function Product(name,price){
    this.name = name;
    this.price = price;

}
function Food(name,price){
    Product.call(this,name,price);

    this.category = "food";
}

function Toy(name,price){
    Product.call(this,name,price);
    this.category = "toy"
}

const cheese = new Food("chips",5);
console.log(cheese);


//why use apply
//appending one array to another

const arr = ["a","c","b"];
const elem = [1,2,3,4];
arr.push.apply(arr,elem);

//using apply in built in function 
//finding min/max in an array 

const numbers = [5,2,3,4,7];

let max = Math.max.apply(null,numbers);
//this is same as Math.max(numbers[0],numbers[1],....)



// Number,string and boolean Object

var val =  new Number(50);
console.log(val) //returns [Number : 50]
//methods of Number object
console.log(val.valueOf()); //returns 50;
var valN = 177.1234
console.log(valN.toPrecision(4))//returns 177.1
console.log("toFixed",valN.toFixed(2))//returns 177.12

//Properties of Number object
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);



let val2 = new String("hello world"); 
console.log(val2);
//property
console.log("val2.length------",val2.length);

//methods
console.log(val2.charAt(3),"---chartAt");
console.log(val2.indexOf("l"),"-indexOf");
console.log(val2.split(""));
console.log(val2.valueOf());


//Boolean Object
let val3 = new Boolean(5);
console.log(val3)
// methods
console.log(val3.toString());
console.log(val3.valueOf()); 


//creating object 5 ways

//with constructor (with this and new )
function vehicle(type,color,maker){
    this.type = type;
    this.color = color;
    this.maker = maker;
}
let bike = new vehicle("bike","red","suzuki");

//Factory function----------
function factory(name){
    return {
        name : name,
        console : function (){
            console.log("FActory function")
        }
    }
}

let product = factory("reliance");
product.console();
 

//object literals
let bike2 = {
    type: "bike",
    color:"red",
    make:"suzuki"
}

console.log(bike2.__proto__);

//with Object.create()
let bikeObject = Object.create(bike2);
console.log("bikeObject",bikeObject)
console.log("protoype of bikeObject",bikeObject.__proto__);

//with new Object
let xyz = new Object(bike2);
console.log("xyz object--",xyz);
console.log("xyz prototype",xyz.__proto__)

//using es6 Classes 
class Person{
    constructor(name,company,hobby){
        this.name = name,
        this.company = company;
        this.hobby = hobby;
    }
}
let p1 = new Person('Utkarsh','Full Creative','chess');
console.log(p1);

//Date Object
// console.log(Date());

// year, month, day, hour, minute, second, and millisecond
let myDate = new Date(2017,11,28,8,28,15,0055);
console.log(myDate);

const today = new Date();
console.log(today);
console.log(today.toString());
console.log(today.toISOString());
console.log("UCT TIME ZONE",today.toUTCString());


let usaTime = today.toLocaleString("en-US");
let indiaTime = today.toLocaleString("en-In");
console.log(usaTime);
console.log(indiaTime)

//polymorphism 

//encapsulation -> process of wrapping properties and functions with single unit
//with

// with(expression)
// statement

// with([1,2,3]){
//     console.log(toString());
// }

let example={
    eg:45,
    ab:68
}
with(example){
    console.log(eg);
    console.log(ab);
}
console.log(emp,"----------")


// let a = 10;

// let obj={
//     greet : function(){
//         console.log(a);
//     }
// }
// obj.greet()


function A(){
    this.name = "cool";
}

A.prototype = {
    howCool : function(){
        return this.name + "er";
    }
};

var a1 = new A(),
    a2 = new A();

a1.name = "hot";
//line1
console.log(a1.howCool);
//line2
console.log(a2.howCool);

delete A.prototype.howCool;

//line3
console.log(a1.howCool);

//line4
var a3 = new A();
console.log(a3.howCool);
