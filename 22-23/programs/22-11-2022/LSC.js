//largest sum of consecutive digits

//[1,2,3,4,3,5,4,6,7,8] //num = 4 ->input
//25 -> output

function abc(arr,k){
    let sum  = 0 ;
    let i = 0;
    let j = k;
    while( j <= arr.length){
        let smallSum = 0;
        for(let a = i ; a < j; a++){
            smallSum = smallSum + arr[a];
        }
        if(smallSum > sum){
            sum = smallSum;
            console.log(smallSum)
        } 
        i++;
        j++;
    }

    return sum;
}

console.log(abc([1,2,3,4,3,5,4,6,7,8],4));