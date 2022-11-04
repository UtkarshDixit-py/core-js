//check if strings are anagram of each other

function checkAnagram(str1, str2){

    if(str1.length !== str2.length) return false;

    var arr1 = str1.split("").sort();
    var arr2 = str2.split("").sort();

    for(let i = 0 ; i < str1.length ; i++ ){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;
}

console.log((checkAnagram("bac","efg")));
console.log((checkAnagram("bac","cab")));