
let items = ["sandwhich","hamburger(nv)","chicken salad(nv)","soup"];

let view = items;
let ul = document.createElement("ul");
ul.setAttribute('id',"myList");
var container = document.getElementById('container');


for(let i = 0; i < view.length;i++){
    var li = document.createElement('li');
    li.innerHTML = arr[i];
    
}