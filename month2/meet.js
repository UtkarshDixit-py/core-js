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

//rread more about callback hell 
//theoratical points for promises
// promise vs callback //detail , when to use what ,which one came first.
//benefits of promises
//async await
//compilation error 
//what are parameters of Promise Object
//ways to call promise, 
//try "this" is scope , revise "this" in arrow function

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






