function abc(str){
    let ans="";
    for(let i = 0; i <str.length;i++){
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" ||str[i]==="o" || str[i]==="u"){
            var a = str[i].toUpperCase();
            ans = ans + a;
        }
        else{ 
            ans = ans + str[i].toLowerCase();
        }
    }
    return ans;
}

console.log(abc("UtKarsh"))