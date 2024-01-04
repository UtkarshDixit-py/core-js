
// bcd efa
// abcdef
function func(str){
    let ans = ""
    for(let i = 0; i < str.length ; i++){
        if(str[i]!==" ") ans = ans + str[i];
        else continue;
    }
    ans =  ans.split("");
    ans.sort();
    ans = ans.join("");
    
    return ans;
}

console.log(func("bcd efa"));
console.log(func("utkarsh dixit"))


