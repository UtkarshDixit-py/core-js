var regex = /ab+c/g; 
var mailReg 
var regex2 = new RegExp('ab+c');

//g -> global , does not return after first match;
//i -> make seraching case insensitive

var string = "utkarsh.dixit@gmail.com";

// \w -> matches with any word character
// \s->matches spaces


var regex = /@/;
var string = "utkarashdixit303@gmail.com"
console.log(regex.test(string))
