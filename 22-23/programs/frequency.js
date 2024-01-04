const arr = [2,5,7,8,5,3,5,7,8,5,3,4];

function freq(arr){ 
    const obj = {};
    arr.forEach(element => {
        if(obj[element]){
            obj[element]++;
        }else{
            obj[element] = 1;
        }
    });

    return obj;
};
console.log(freq(arr));