

function replaceChar(str,char){
    let ans="";
    for(let i = 0; i < str.length; i++ ){
        if(str[i]!==char){
            ans = ans+str[i];
        }
        else{
            ans = ans + "*";
        }
    }
    return ans;
}


function replaceChar2(str,char){
 let splitString = str.split(char);
 let ans = splitString.join("*");
 return ans;
}



console.log(replaceChar("hello world","o"));
console.log(replaceChar2("hello world","o"));