
function helper(word){
    let count,ans;
    // console.log(word)
    for(let i = 0 ; i <= word.length -1 ; i++){
        if(word[i]===word[i+1]){
            count++;
            ans = count;
        }
        else{
            count = 0;
        }
    }
    return ans;
}

function main(str){
    let arr = str.split(" ");
    // console.log(arr)
    let word;
    let ans = 0;
    for(let i = 0 ; i <= arr.length -1 ; i++){
        let count = helper(arr[i]);
        // console.log("count in main" , count);
        if(ans < count){
            ans = count;
            word = arr[i];
        }
    }
    return word;
}

console.log(main("eeewww aaddddd jjj bddjk"));
