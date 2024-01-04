
function groupAnagram(string){
    let obj = {}

    string.forEach(str => {
        let letters = str.split('').sort();

        obj[letters] ? obj[letters].push(str) : obj[letters] = [str]
    });

    const keys = Object.keys(obj);
    const values = keys.map(function(i){return obj[i] });

    return values;
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))