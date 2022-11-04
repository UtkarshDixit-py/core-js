let a = 10;

let arr = [10,20,30,40,50];

console.log(arr.includes(10)); //includes


console.log(arr.map((e)=>e+1)); //map

let newArr=[];

arr.forEach((e)=>newArr.push(e)); //forEach
console.log(newArr)


console.log(arr.filter((x)=> x < 30 ),"filter"); //filter
console.log(arr.find((x)=>x < 30),"find"); //finds

//arr.reduce((acc,curr,i,arr)=>{},0);
const sum = arr.reduce((acc,curr,i,arr)=>{ //reduce
    return acc+curr;
})


arr.pop(); //pop
console.log(arr)

arr.shift(); //shift
console.log(arr)

console.log(arr.slice(2),"slice"); //slice
//
arr.push(55); //push
console.log(arr)


