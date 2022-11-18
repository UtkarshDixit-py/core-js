// const obj={
//     name : "utkarsh",
//     age:"23",
//     address :{
//         pincode:140603,
//         area:"vip road",
//     }
    
// }
//  let obj1={

//  }

//  const json ={
//     "name":"utkarsh"
//  }

   //encapsulation --done
    //polymorphism --done
    //way to create Objects in Javascript --done
    
    //predefined objects--done
    // string Object --done
    //boolean and number objects -- done
    //and their methods and properties --done

    // eval() //read more about --done
    //date objects , printing dates differently.--done
    //add hovering effect on row --done
    //structure of JSON ans=> key value pair ,--done
    // have more points for JSON , how to save JSON file--done
    //with --done
    //mime type for JSON --<application/json>
    //how to validate json? --JSONLint
    //array as JSON --done



//making regex basics eg - accept only email

//DO TEST your skills in MDN DOCS


//add with form pop up
//adding log in / sign up adding in local storage



//----------------

//new object //way to create objects with new object


var date = new Date();
console.log(date);

//print current date in different time zones --done

var a = 52;
if(typeof a === "number"){
    console.log("it is a number");
}
//can check with help of remainders 

console.log(Number.isInteger(2))

//admin and user log in 
// user should not see the add form and delete and add option in table

//add sign up with admin or user
//identify log in with saved sign up data if it is user or admin

//read more about callback disadvantages --done
//theoratical points for promises --done
//promise vs callback //detail , when to use what ,which one came first.--done
//benefits of promises --done
//async await
//what are parameters of Promise Object
// revise "this" in arrow function

let obj ={
    name:"utkarsh",
    abc: function abc(){
        console.log(this.name);
    }
}

obj.abc();


// var length = 4;
// function callback() {
// console.log(this.length); // What is logged?
// }

// const object = {
//     length: 5,
//     method() {
//         arguments0;
//         }
// };
// object.method(callback, 1, 2);




const object = {
    who: 'World',
    greet() {
    return "Hello", `${this.who}!`;
    },
    farewell: () => {
    return "Goodbye", `${this.who}!`;
    }
};
    console.log(object.greet()); // What is logged?
    console.log(object.farewell()); // What is logged?



    function Person(name, age) {
        this.name = name;
        this.age = age;
    
        this.person = () => {
            return `hi ${this.name} and ${this.age}`;
        };
    }
    
    let p12 = new Person("sankavi", 22);
    console.log(p12.person,"-------------------------");

     // function obj(name){
//      constructor(name){
//         this.name = name;
//     }
// }

// var instance = new obj('utkarsh');
// console.log(instance);


// class obj(name){
//         this.name = name
// }

// var instance = new obj('utkarsh');
// console.log(instance);

// let obj = {
//     "name" : 'utkarsh',
//     roll : 5151,
//     abc : function abc(){
//         console.log(this.name); 
//     }
// }

// let obj2 ={
//     address:"okokokoko",
//     number:85595959,
// }
// console.log(obj.abc());

        // '{username : utkarsh}'

// let converted = JSON.parse('{ "username" : "utkarsh"}');

// let convertBack = JSON.stringify(converted)
// console.log(converted);

// console.log("converted back",convertBack)



//programming question output below
// [ [ 'address', 'okokok' ], [ 'number', 654546
// ] ]


//web apis in async JS
//how make 2 objects into 1 combining both properties
//how to find obj key is present or not
//how to add key prop to obj syntax
//methods vs functions
//work on syntax/practice more programs
//do promise combinators

// var prop = "my Name";
// console.log(obj["my Name"]);

// var ans = obj.find('name');
// console.log(ans);


// console.log(obj);
// delete(obj.name);
// console.log(obj);


// setTimeout(()=>{
//     console.log("Abc");
// },2000);
// console.log("Abc2");


// let promise = new Promise((resolve,reject)=>{
//     // resolve('Resolved');
//     reject("rejected");
// })

// promise
//     .then((message)=>{
//         console.log(message)
//     })
//     .catch((e)=>{
//         console.log(e)
//     })
//     .catch(()=>{
//         console.log("error")
//     })


// function hi() {
//     console.log(this);
// }
// hi()


// var abc=() => {
//     console.log(this);
// }
// abc()

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.person = () => {
//         return `hi ${this.name} and ${this.age}`;
//     };
// }

// let p12 = new Person("sankavi", 22);
// console.log(p12.person);


function abc(){
    let a = 10;
    function xyz(){
        console.log(a)
    }
    xyz()
}
abc()


// let obj1={
//     name : "utkarsh",
//      function abc(){
//         console.log(this.name);
//     }
// }



// let obj2={
//     name : "sankavi",
    
// }
   
// abc.call(obj2,"argument");
// abc.apply(obj2,["obj","obj2"]);

// var save = abc.bind(obj2,"argument");



// console.log(obj2);


// [1,2,3,4,5,5,5,5,6,6,6,7,2]

// let arr = [1,2,3,4,5,5,5,5,6,6,6,7,2];
// arr.sort();

// let ans=[];

// for(let i = 0; i < arr.length-1;i++){
//     let pair = [];
//     let count= 0;
//       while(arr[i] == arr[i+1]){
//         //   console.log("infinite");
//             count++;
//           pair.push[arr[i]]
//           pair.push[count]
//       }
//   ans.push(pair);
//   count=0;
// }

// console.log(ans)



//know predefined as well as longer approach for question
//wap to reverse the number 
//know basics for programs
//when to use arrow function and when to use normal
//AJAX vs fetch, which is better , syntaxes of each 
//what is module , why we require module ,way to define module, how to import and export multipe value , what are alternate , can you creat your own module
//have more examples for oops concepts


//see below code
// function obj1(surname){
//     this.name = "something";
//     this.surname = "newnwnw";
//     greet  = function(){
//         console.log("hello " + this.name + this.surname+" here ");
//     }
// }


// function obj2(){
//     this.name = "something else";
//     this.surname = surname;
// }

// // obj1.greet.call(obj2);
// obj1.greet();


// console.log(obj1,obj2);







//object.freeze
// Function.prototype.bind

// class xyz{
//     constructor(name,address){
//         this.name = name;
//         this.address = address;
//     }
// }

// function abc2(name,address){
//     this.name = name;
//     this.address = address;
// }

// console.log("prototype",abc.__proto__);
    

// let o1={
//     name:"Utkarsh",
//     greet : function(){
//         console.log("hi my name is " + this.name);
//     }
// }

// let o2={
//     name:"new name ",

// }

// var abcd = o1.greet.bind("o2");

// abcd();


//make library kind of webiste

//make authentication work, sign up log in 
//admin can add book , delete the book , and entering quantitiy ,author name 
//user can only read it.
//user can ask for book issue(end goal)

//call apply bind read mdn again, with examples 

//have syntax , remember syntaxes ,  write syntax when reading about topics , have examples of it.

// how to unfreeze the .freezeed object


//15-11-22
//try setting with null and undefined on both set maps as keys -done
// does map support garbage collection 
// how to iterate with arrow functions -done 
//weakmap , weakset ,hashmap what is the diffeence  
//when to use map and when to use set 
// setPrototypeOf()
//ways to create maps and etc 
//write syntax in commments 
//ways to iterate in general


//prototypal inheritance
//check deep copy or shallow copy in case of objects and prototypes , prototypal inheritance
//can global vriable be accessed inside function of objects, what is the purpose of having funtions inside the object
//what is readystate4, xhr, ajax req real time example 
//read more about status codes 


//meet with karty 
// let a = {
//   "userId": 281,
//   "id": 1,
//   "title": "new title",
//   "completed": false,
// }



// let arr =[];
// function abc(){
//     for(let i = 0; i < 6;i++){
//         let myObj = new Object(a);
//         myObj.userId =  myObj.userId + 1;
//         console.log(myObj);
//         arr.push(myObj);
//     }
// }

// console.log(arr)

let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "aut autem",
        "completed": false
    },
    {
        "userId": 2,
        "id": 2,
        "title": "aut autem",
        "completed": true
    },
    {
        "userId": 3,
        "id": 3,
        "title": "aut autem",
        "completed": true
    },
    {
        "userId": 4,
        "id": 4,
        "title": "aut autem 4",
        "completed": false
    },
    {
        "userId": 5,
        "id": 5,
        "title": "delectus 5",
        "completed": false
    },
    {
        "userId": 6,
        "id": 6,
        "title": "random text",
    }
]

// let newArr = arr.filter((item)=>{
//   return item.title;
// })

let newArr = arr.map((i)=>{
    return i.title;
})

let arr2 = arr.filter((i)=>{
    // let stringArr = i.title.split("");
    // let numberArr = [];
    return stringArr.includes(5);
})


console.log(newArr);
console.log(arr2);




