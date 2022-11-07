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



function timeOut(){
    for(var i =1; i <=5;i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
    console.log("hello world");
}
timeOut();



function timeOut3(){
    for(var i =1; i <=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            }, x * 1000);
        }
       close(i);
    }
    console.log("hello world");
}
timeOut3();



function timeOut2(){
    for(let i = 1; i <=5;i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
    console.log("hello world2");
}
timeOut2();

 
