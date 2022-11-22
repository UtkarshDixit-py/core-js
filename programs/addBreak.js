

const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;
// const string = "ok\nok";
console.log(string);

 
// I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.
// console.log(string.split(""));
let newString ="" ;
for(let i = 0 ; i < string.length ; i++){
    if(string[i] !== '\n'){
        newString = newString+string[i];
    }
    else if(string[i] === '\n'){
        // newString.push("<br>");
        newString = newString+"<br>";
    }
}
// newString.join(" ");
console.log(newString);

