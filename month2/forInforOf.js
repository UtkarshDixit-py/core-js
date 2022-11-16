let arr = [55,44,33,22,11]

// for(key of array ){
//     //block of code
// }

for(let el of arr){
    console.log(el);
}

const student = {
    name:"Utkarsh",
    copany:"Full Creative",
    age:23
}

// for(key in object){
//     //block fo code
// }

for(let key in student){
    console.log("for in on object", student[key] );
}

