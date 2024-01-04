
// [
//     [3,5,6,],
//     [7,8,9],
//     [10,12,15]
// ]


//for 3X3 mattrix
function printSum(arr){
let sum = 0;
for(let i =0; i<arr.length; i++){
    // console.log(arr[i]);
    for(let j = 0 ; j < arr[i].length;j++){
        if(i === j ){
            sum = sum + arr[i][j];
        }
    }
}
return sum;

}
console.log(printSum([
    [1,5],
    [7,8],
]))
// console.log(printSum([
//     [3,5,6,6],
//     [7,8,9,3],
//     [10,12,15,8],
//     [16,20,18,1]
// ]))

