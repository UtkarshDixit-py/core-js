let a = 1000;

console.log(`string here ${a} string here`);

function isLargeScreen(){
    // return true;
    return false;
}

const item ={
    isCollapsed : false,
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


