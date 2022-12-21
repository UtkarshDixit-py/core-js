// Input is ABC

// output : "ABC", "ACB", "BAC","BCA","CBA",CAB"


function fact(number){
    let ans = 1;
    if(number ==1 || number==0) return ans;
    else{
        for(let i = number; i>=1;i--){
            ans = ans * i;
        }
    }
    return ans;

}

function abc(str){

    let arrLength = fact(str.length);
    console.log(arrLength);

    let set = new Set()
   
}

console.log(abc("ABC"))