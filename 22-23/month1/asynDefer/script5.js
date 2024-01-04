(function(){
    var j = 0;
    for(var i = 0; j < 100000000;j++){
        j = j +i; 
    }
    document.getElementById("log").innerHTML += "script5 ---" + j + "-----" + Date() + "<br>";
})()