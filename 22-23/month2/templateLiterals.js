let a = 1000;

console.log(`string here ${a} string here`);

function isLargeScreen(){
    // return true;
    return false;
}

const item ={
    isCollapsed : false,
    // isCollapsed : true,
}

//nesting templates

//without  template
let classes = "header";

classes += isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser";
console.log(classes);


// with template literals but without nesting

const className = `header ${isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser" }`
console.log(className);

//with template nesting 
var classesName = `header ${
    isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
console.log(classesName);


//tagged templates
let person = "Mike";
let age = 28;

//syntax
// function name(string array, expression1, expression2 ,.....){

// }

function myTag(strings,personExp,ageExp){
    const str0 = strings[0];
    const str1 = strings[1];
    const str2 = strings[2];

    const ageStr = ageExp > 99 ? "older" : "younger";

    return `${ageStr}`;
}

const output = myTag`That ${person} is ${age}`;

console.log(output);

//will throw error when chained
// console.log(`Hello``World`); // TypeError: "Hello" is not a function







