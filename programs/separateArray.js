
let arr = [1,2,3,4,5,5,5,5,6,6,6,7,2];
arr.sort();
let even =[];
let odd=[];

for(let i = 0; i < arr.length;i++){
    if(arr[i]%2===0){
        even.push(arr[i]);
    }
    else{
        odd.push(arr[i]);
    }
}

console.log(even);
console.log(odd);