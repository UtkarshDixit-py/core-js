let a =10
if(a>5){
    console.log("a is more than 5")
}
else{
    console.log("a is not more than 5");
}

//---------------------------------------------------

let age = 50;

switch(age){
    case age < 18:
        console.log("age is less than 18");
        break;
    case 18:
        console.log("age is exaclty 18");
        break;
    default:
        console.log("age is more than 18");
}


let day = 4;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
        console.log("not valid input")
}

for(let i = 0 ; i < 5 ; i++){
    console.log("for hello");
}

let i = 0;
while(i > 0){
    console.log("while")
    i--;
}

let j = 0;
do {
    console.log("do while")
    j--;
} while (j > 0);


for(let i = 0 ; i< 10 ;i++){
    if(i==5) continue;
    console.log(i);
}



let arr = [55,44,33,22,11]
for(let el of arr){
    console.log(el)
}

const student = {
    name:"Utkarsh",
    copany:"Full Creative",
    age:23
}

for(let key in student){
    console.log(key, student);
}
