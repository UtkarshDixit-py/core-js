let arr = [1,2,3,4,5,6];


// .map(function(currentValue){

// })
const map = arr.map((item)=>{
    return item * 2;
})

console.log(map)

const filtered = arr.filter((item)=>{
    return item < 4;
})
console.log(filtered);
// arr.reduce(function(acc,curr){
// },initital value of acc)
const output = arr.reduce((acc,curr)=>{
    acc = acc + curr;
    return acc;
},0)        

console.log(output)
