let obj = {
    name:"utkarsh",
    company:"full creative",
}

function hasKey(obj,key){
    for(let i in obj){
        if(key===i) return true;
    }
    //for...in also counts inherited properties

    return false;
}

console.log(hasKey(obj,"name"));

//in one line 
console.log(obj.hasOwnProperty('name'));
//counts only it's original properties

