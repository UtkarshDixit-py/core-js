
//"this" in arrow function
function person(name){
    this.name = name ;
    // console.log(this.name);
    setTimeout(function(){
        console.log("this.name",this.name);
    },1000);
}

 person("utkarsh");


 function human(name){
     this.name= name;
    //  console.log(this);
     setTimeout(()=>{
        console.log("this.name",this.name);
    },1000);
 }
 
human("utkarsh2");

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