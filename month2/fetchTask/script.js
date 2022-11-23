console.log("hello");
let myTable = document.querySelector('table');

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise = fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');

console.log(fetchPromise);


let headers = ["Id","FirstName","Last name","email","Contact Number","Age"]

const response = fetchPromise.then((res)=>{
   const jsonPromise =  res.json();
   jsonPromise.then((data)=>{
    // displayData(data)
    saveData(data);
    let storedData = JSON.parse(window.localStorage.getItem("list"));
    displayData(storedData);
   });
})

function saveData(data){

    for(let i = 0; i < data.length;i++){
        // window.localStorage.setItem(data[i].name,JSON.stringify(data[i]));
         window.localStorage.setItem("list",JSON.stringify(data));

    }
    console.log(window.localStorage);
}


function displayData(data){

    console.log(data)
   
    let table = document.querySelector('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText=>{
        let header = document.createElement('th');
        let text = document.createTextNode(headerText);
        header.appendChild(text);
        headerRow.appendChild(header);
    })
    table.appendChild(headerRow);

    // data.forEach(i=>{
    //     let row = document.createElement('tr');

    //     Object.values(i).forEach(text=>{
    //     let cell = document.createElement('td');
    //     let textNode = document.createTextNode(text);
    //     cell.appendChild(textNode);
    //     row.appendChild(cell);
    //     })
    //     table.appendChild(row);
    // })
    // myTable.appendChild(table);
    
    data.forEach(elem=>{
        displayAllData(elem)
    })
}

function displayAllData(elem){
    console.log(elem)
    let tableRow = document.createElement('tr'); // create one table row element and setting its inner html as json response
    tableRow.id = elem.id;
    // <td>${elem.imageUrl}</td>
    tableRow.innerHTML = (`
                <td>${elem.id}</td>
                <td>${elem.firstName}</td>
                <td>${elem.lastName}</td>
                <td>${elem.email}</td>
                <td>${elem.contactNumber}</td>
                <td>${elem.age}</td>
    `)
    
    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    
    deleteBtn.addEventListener('click',()=>{
        console.log(elem.id)
        deleteRow(elem.id)

    })
    tableRow.appendChild(deleteBtn);
    
    myTable.appendChild(tableRow); // adding all details to existing table

}

function deleteRow(id){ 
    for (let i = myTable.childNodes.length-1; i >= 0; i--) {
        if(myTable.childNodes[i].id == id){
            myTable.removeChild(myTable.childNodes[i]);
        }    
     }  
}

let logInBtn = document.querySelector('#loginBtn');
let pesonalData = document.querySelector('#personalData');
let logInForm = document.querySelector('#logInForm');

logInBtn.addEventListener('click',()=>{
    pesonalData.style.display = "flex"
    logInForm.style.display = "none"
})

//SIGNUP-------------
let signUpForm = document.querySelector("#signUpForm")
let [newName,newEmail,newPassword] = document.querySelectorAll(".signUpData");
let[admin,user] = document.querySelectorAll(".type");

let signUpBtn = document.querySelector("#signupBtn");

let allUsers = [];

signUpBtn.addEventListener('click',()=>{

    //authenticate mail and password
    //check if alteast ine check box is checked

    let userDetail={};
    console.log(newName.value,newEmail.value,newPassword.value);
    userDetail.name=newName.value;
    userDetail.email=newEmail.value;
    userDetail.password = newPassword.value;
    if(admin.checked===true){
        userDetail.type = "admin"
    }else{
        userDetail.type = "user"
    }
    console.log(userDetail);
    allUsers.push(user);
    signUpForm.style.display="none";
    logInForm.style.display="flex";

})



