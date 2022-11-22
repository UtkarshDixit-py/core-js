
//Hello World
// Output -> l

function maxFreq(str){
    const obj = {};
    let charArray = str.split("");
    charArray.forEach(element => {
        if(obj[element]){
            obj[element]++;
        }else{
            obj[element] = 1;
        }
    });

    let max = 0;
    let char = "";
   for(let i in obj){
    if(obj[i] > max){
        max = obj[i];
        char = i;
    }
   }
   return char
}

console.log(maxFreq("Hello World"))