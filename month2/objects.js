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
// Constructor------------------------

function createPerson(name){
    const obj ={};
    obj.name = name;
    obj.introduction = function(){
        console.log(`Hi I am ${this.name}`)
    }
    return obj;
}

const aviObj = createPerson("avi");
console.log(aviObj.name);

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


//creating object 4 ways

//with constructor and new
function vehicle(type,color,maker){
    this.type = type;
    this.color = color;
    this.maker = maker;
}
let bike = new vehicle("bike","red","suzuki");
 

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

 
//inheritance
class p{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`HEY ${this.name}`);
    }
}

//inheriting from parent
class Employee extends p{

}

let employee1 = new Employee('utkarsh');
employee1.greet();

//polymorphism 
//same function is called many times with different signature

class firstClass{
    add(){
        console.log("FIRST");
    }
}

class secondClass extends firstClass{
    add(){
        console.log("Second");
    }
}
class thirdClass extends secondClass{
    add(){
        console.log("Last");
    }
}

    var ob1 = new firstClass();
    var ob2 = new secondClass();
    var ob3 = new thirdClass();

    ob1.add();
    ob2.add();
    ob3.add();

//encapsulation -> process of wrapping properties and functions with single unit

class computer {
    constructor(brand,id){
        this.brand = brand;
        this.id = id;
    }
    addType(type){
        this.type = type;
    }

    getDetails(){
        console.log("i am a ", this.brand , this.type);
    }
}

let laptop = new computer("Asus","55151651");
laptop.addType('laptop')
console.log(laptop.getDetails());



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

//merging two objects

let man = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let emp = {
    ...man,
    ...job
}

let emp2 = Object.assign(man,job);

console.log(emp,"----------")




//Important object methods 
console.log("-----Important object methods -----")
// creating shallow copy
let target = {
    a:25,
    b:24
}
let source = {
    a:11,
    b:36
}

let returnedTarget = Object.assign(target,source);

//way to make a deep copy
let deepCopyObj = JSON.parse(JSON.stringify(man));
console.log(deepCopyObj);



//OBJECT.ENTRIES
const object1 = {
    a: 'somestring',
    b: 42
  };

 console.log(Object.entries(object1)); 
 console.log(Object.keys(object1)); 
 console.log(Object.values(object1)); 

//OBJECT.FREEZE and OBJECT.ISFROZEN
const randomObj = {
    prop:12
};

Object.freeze(randomObj);
randomObj.prop = 55; //throws and error in strict mode 

console.log(randomObj.prop) //12

console.log(Object.isFrozen(randomObj));


//OBJECT.IS
console.log(0===-0);
console.log(Object.is(0,-0));

console.log(NaN === Number.Nan);//false
console.log(Object.is(NaN, Number.NaN)); // true
