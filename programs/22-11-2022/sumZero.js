// [-5,-4,-3,-2,0,2,4,6,8] -> input
//[-4,4] -> output

function sumZero(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 1 ; j <arr.length ; i++ ){
            if(arr[i] + arr[j] === 0){
                return [arr[i],arr[j]];
            }
        }
    }
}

console.log(sumZero([-5,-4,0,2,4,6,8,-3,-2]));

function sumZero2(arr){
    // arr.sort();
    let i = 0;
    let j = arr.length -1;
    while(i < j){
        if(arr[i] + arr[j] === 0 ){
            return [arr[i],arr[j]];
        }
        else if(arr[i] + arr[j] > 0 ){
            j--;
        }
        else if(arr[i] + arr[j] < 0 ){
            i++;
        }
    }
    
    return "none";
}

console.log("---",sumZero2([-5,-4,0,2,4,6,8,-3,-2]));

