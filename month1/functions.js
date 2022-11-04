
//function statement
function a(){
    console.log("a");
}

a()

//function expression and annonymous function
var b = function(){
    console.log("b")
}

b()

//arrow function 
var arrow = ()=>{
    console.log("arrow Function");
}
arrow()

//"this" in arrow function
function person(name){
    this.name = name ;
    console.log(this);
    setTimeout(function(){
        console.log("this",this);
    },1000);
}

 person("utkarsh");

console.log("---------------------");

 function human(name){
     this.name= name;
     console.log(this);
     setTimeout(()=>{
        console.log("this",this);
    },1000);
 }
 
human("utkars2")




//callback function
//here abc is a call back function and setTimeout is higher order 
setTimeout(function abc(){
console.log("callback function");
},1000)

//IIFE
// (function efg(){
// console.log("IIFE")
// })()