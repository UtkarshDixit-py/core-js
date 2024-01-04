let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz";

function randomString(length){
    let res = "";
    for(let i = 0; i < length;i++){
        res += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return res;
}
console.log(randomString(6));