// "aaabccddddd" input
// "a3b1c2d5" output

function compress(str){
    let res = "";
    let count = 0;
    for(let i = 0 ; i< str.length;i++){
        count++;
        if(str[i] !=str[i +1]){
            res = res + str[i] + count;
            count = 0 ;
        }
    }
    console.log(res);
}

compress("aaabccddddd");