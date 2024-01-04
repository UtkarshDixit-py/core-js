function abc(arr){

    let temp =arr[0];
    arr[0] = arr[1];
    arr[1]= temp;

    return arr;
}
console.log(abc([2,4]));