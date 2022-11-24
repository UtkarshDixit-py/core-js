function getRandom(arr){
    let randomIndex = Math.floor(Math.random() * arr.length)
    // console.log(randomIndex)
    let item = arr[randomIndex];
    return item;
}

console.log(getRandom([1,2,3,4,5]))