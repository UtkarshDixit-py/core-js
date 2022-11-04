(function(){
    var j = 0;
    for(var i = 0; j < 10000000000;j++){
        j = j +i; 
    }
    document.getElementById("log").innerHTML += "script3---" + j + "-----" + Date() + "<br>";
})()