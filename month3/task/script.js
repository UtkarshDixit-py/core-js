
let items = ["sandwhich","hamburger(nv)","chicken salad(nv)","soup"];

let view = items;

let ul = document.createElement("ul");
ul.setAttribute('id',"myList");
var container = document.getElementById('container');



window.addEventListener("load", (event) => {
    
  });

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
let arr=[]

btn.addEventListener("click",()=>{
    for(let i = 0;i < checkBoxArr.length;i++){
        if(checkBoxArr[i].checked){
            ans = checkBoxArr[i].value
        }
    }
    console.log(ans)

    if(ans==="veg"){
        view = document.querySelectorAll(".veg");
    }
    else view = document.querySelectorAll(".nonveg")
    console.log(view)
    //console filtered 
    for(let i = 0;i <view.length;i++){
        console.log("ans",view[i].innerText)
        arr.push(view[i].innerText);
        console.log(arr)
    }
})






