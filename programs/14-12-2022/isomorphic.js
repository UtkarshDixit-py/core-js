// kill bill - true 112
// foo bar - false
// aabc kkqa - true


function helper(str){
    let arr=[];
    let map = {}
    for(let i = 0 ; i < str.length;i++){
        if(map[str[i]]){
            map[str[i]] = map[str[i]] + 1;
        }
        else{
            map[str[i]] =1;
        }
    }
    // console.log(map)
    for (const key in map) {
        // console.log(map[key]);
        arr.push(map[key])
        
    }
    return arr;

}


function abc(str1,str2){
    if(str1.length !== str2.length) return false;

    let ans1 = helper(str1);
    let ans2 = helper(str2);
    // console.log(ans1);
    // console.log(ans2);

    if(ans1.length!==ans2.length) return false

    for(let i = 0 ;i<ans1.length;i++){
        if(ans1[i]!=ans2[i]) return false;

        return true;
    }
    // if(ans1 == ans2) return true

    // return false
}

console.log("answer",abc("foo","bar"));
console.log("answer",abc("aabc","kkqa"));
console.log("answer",abc("kill","bill"));