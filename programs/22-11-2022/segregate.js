// [1,2,3,4,5,6,7,8] 

// [[1,2],[3,4],[5,6],[7,8]]


function abc(arr,k){
    let limit = k;
    let ansArr =[];
    for(let i = 0 ; i < arr.length  ; i++){
        let subArray = [];
        for(let j = limit ; j > 0 ;j--){
            subArray.push(arr[i]);
            console.log("i------",i)
            // i++;
        }
        ansArr.push(subArray);
    }
    return ansArr;
}

console.log(abc([1,2,3,4,5,6,7,8],2))
