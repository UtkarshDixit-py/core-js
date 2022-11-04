
let arr = [10,20,30,40];

function sum(a,b,c,d){
    return a + b + c + d;
}
console.log(sum(...arr)); //spread operator


function arrPrint(...args){ //rest operator
    console.log(args);
}

console.log(arrPrint(3,5,3));

//destructuring 

const [a, b] = arr;
console.log(a); // 10
console.log(b); // 20

const obj = { i: 10,j:20 };
const {i,j} = obj;
console.log(i);
console.log(j);

const {i:z ,j:q} = obj;
console.log(z);
console.log(q);

// binding and assignment ?


