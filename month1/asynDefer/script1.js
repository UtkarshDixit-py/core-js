(function(){
    var j = 0;
    for(var i = 0; j < 1000000;j++){
        j = j +i; 
    }
    document.getElementById("log").innerHTML += "script1---" + j + "-----" + Date() + "<br>";
})()