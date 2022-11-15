let a = 1000;

console.log(`string here ${a} string here`);

//nesting templates

//without  template
let classes = "header";

classes += isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser";


// with template literals but without nesting

const className = `header ${isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser" }`

//with template nesting 
var classesName = `header ${
    isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;


