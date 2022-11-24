let a = [1,2,3,4,5,6,7];
let b = ["hey","text","string",5,6,7,8,9,10];

function merge(a,b){
    
    for(let i = 0 ; i <= Math.max(a.length,b.length) ;i++){
        if(!a.includes(b[i])){
            a.push(b[i])
        }
    }
    return a;
}

console.log(merge(a,b));
console.log(a.length);