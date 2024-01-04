
const vowels = ["a","e","i","o","u"];

function count(str){
    let count = 0;
    for(let i of str.toLowerCase()){
        if(vowels.includes(i)){
            count++;
        }
        
    }
    return count;
}
console.log(count("utkarsh"));
