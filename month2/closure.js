(function abc(){
    let a = 25;
    (function efg(){
        console.log(a)
    })()
})() 


function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z();


function parent(){
    var a = 10;
    function child(){
        console.log(a);
    }
    a=100;
    return child;
}
var res = parent();
res()




