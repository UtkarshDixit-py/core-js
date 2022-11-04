

var uName = document.querySelector("#name");

var email = document.querySelector("#email");

var password = document.querySelector("#password");

console.log(uName,email,password);

var submit = document.querySelector("#submit")

// document.form1.text1.focus();

//validating using regex


let arr = [];

function store(){
    var mailValue = email.value;
    var name = uName.value;
    var pwd = password.value;
   
     const details = {
        name : name,
        email : mailValue,
        password : pwd
     }
     
      window.localStorage.setItem(email,JSON.stringify(details));
}


submit.onclick = ()=>{
    var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ ;
    var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    //To check a password between 6 to 20 characters which contain at least 
    //one numeric digit, one uppercase and one lowercase letter


    if(email.value.match(emailReg)){
        console.log("Email is okay")
        email.style.border="";
    }
    else{
        alert("Enter Valid Email")
        email.style.border = "2px solid red"
    }

    if(password.value.match(passwordReg)){
        console.log("Password is Okay");
        password.style.border="";
    }
    else{
        alert("Enter Valid Password")
        password.style.border = "2px solid red"
    }

    if(uName.value.length!==0){
        console.log("username is okay");
        uName.style.border="";
    }
    else{
        alert("enter username")
        uName.style.border = "2px solid red"
    }

    store();
    console.log(window.localStorage);

}