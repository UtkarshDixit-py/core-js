
// [1,1,2,2,3,4,4,5,6,7,8,8] -> Input
//Output -> 8

function uinque(arr){
    arr.sort()
    let ans = [];
    for(let i = 0 ; i < arr.length -1 ; i++){
        if(ans.includes(arr[i])) continue;

        else ans.push(arr[i]);
    }
    return ans.length;
}
console.log(uinque([1,1,2,2,3,7,8,8,4,4,5,6]));



