let a = [1,2,3,4,5,6,7];
let b = [56,5,6,7,8,9,10];


// function merge(a,b){
    
//     for(let i = 0 ; i < Math.max(a.length,b.length) ;i++){
//         if(!a.includes(b[i])){
//             a.push(b[i])
//         } 
//     }
//     return a;
// }

// console.log(merge(a,b));
// console.log(a.length);

//------another way

function removeDuplicate(arr){
    let uniqueArray = [];
    for(let i of arr){
        if(!uniqueArray.includes(i)){
            uniqueArray.push(i);
        }
    }
    return uniqueArray;
}

let ans = removeDuplicate(a.concat(b));
console.log(ans);

//----------
// using set

function merge(a,b){
    let arr = [...a,...b];

    let uniqueArray = new Set(arr);
    console.log(uniqueArray);
}

merge(a,b);