// input "abcabcbb"
// output - 3

function abc(s) {
    
    let end = 0;
    let start = 0;
    let maxLength=0;

    const uniqueChar = new Set();

    while(end < s.length){
        if(!uniqueChar.has(s[end])){
            uniqueChar.add(s[end]);
            end++;

            maxLength = Math.max(maxLength,uniqueChar.size);
        }
        else{
            uniqueChar.delete(s[start]);
            start++;
        }
        console.log("start-end",s[start],s[end],uniqueChar)
    }
    return maxLength;

};

console.log(abc("pwwkew"));