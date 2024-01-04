// "abba" - dog cat cat dog - true

// "abba" - dog cat cat fish - false
//acdd = dog cat cow cow - true
//abacbcdd = dog cat dog fish cat dog cow cow 



function abc(str,words){

let wordArr = words.split(" ");
let valueArr=[];


if(str.length !== wordArr.length) return false
let obj = {};

for(let i = 0 ; i < str.length ;i++){
    if(obj[str[i]]){
        
        // obj[str[i]] =  obj[str[i]] +1;
        continue;
        
    }
    else{
       
        // obj[str[i]] = 1;
        obj[str[i]] = wordArr[i];
    }
}

for (const key in obj) {
    valueArr.push(obj[key]);
}

console.log(valueArr);
console.log(wordArr)


for(let i =0 ; i <str.length;i++){
    if(wordArr[i]===obj[str[i]]){
        // console.log("same",wordArr[i],obj[str[i]])
        continue;
    }

    else {
        // console.log("differ",wordArr[i],obj[str[i]])
        return false
    }
}

return true;
}

console.log("second",abc("abba", "dog cat cat fish"));

