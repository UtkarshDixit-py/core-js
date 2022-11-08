///three digit 
function armstrong(number){
var temp = number;
var sum=0;
    while(temp > 0){
        //153/10 = 3 remainder
        var digit = temp%10;
        sum = sum + digit**3;
        temp = parseInt(temp/10);
    }
    if(sum===number) return true;

    return false;
}

console.log(armstrong(153))