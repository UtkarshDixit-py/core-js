function abc(arr){
    arr.sort();
    let ans =[];
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i]!==arr[i+1]){
            ans.push(arr[i]);
        }
        else{
            continue;
        }
    }
    return ans;
}

function removeDuplicate(arr){
    let uniqueArray = [];
    for(let i of arr){
        if(!uniqueArray.includes(i)){
            uniqueArray.push(i);
        }
    }
    return uniqueArray;
}

console.log(abc([3,1,2,3,3,4,5]));
console.log(removeDuplicate([1,2,3,4,5,5,6]));

//another approach using set