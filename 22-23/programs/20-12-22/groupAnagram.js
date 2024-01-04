
function abc(str){
let obj={};

for(let i of str){
    let key = i.split("").sort().join("");
    if(obj[key]){
        obj[key].push(i)
    }else{
        obj[key] = [i];
    }
}
return Object.values(obj)
}

console.log(abc(["eat","tea","tan","ate","nat","bat"]))