// 164,124,114
// true

function abc(a,b,c){
    let res1 = a % 10;
    let res2 = a % 10;
    let res3 = a % 10;

    return res1 == res2 && res1== res3;
}

console.log(abc(164,124,114));