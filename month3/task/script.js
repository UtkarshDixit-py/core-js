
let items = ["sandwhich","hamburger(nv)","chicken salad(nv)","soup"];

let view = items;

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
  


let ul = document.createElement("ul");
ul.setAttribute('id',"myList");
var container = document.getElementById('container');


for(let i = 0; i < view.length ;i++){
    var li = document.createElement('li');
    li.innerHTML = view[i];
    ul.appendChild(li)

    if(view[i].includes("nv")){
        li.setAttribute("class","nonveg");
    }
    else{
        li.setAttribute("class","veg")
    }
}
container.appendChild(ul);

let btn = document.getElementById("filterBtn");
let checkBoxArr = document.querySelectorAll(".filter");
let ans;
console.log(checkBoxArr[0].value);

btn.addEventListener("click",()=>{
    for(let i = 0;i < checkBox.length;i++){
        if(checkBox[i].checked){
            ans = checkBox[i].value
        }
    }
    console.log(ans)

    if(ans==="veg"){
        view = document.querySelectorAll(".veg");
    }
    else view = document.querySelectorAll(".nonveg")
    console.log(view)
})






