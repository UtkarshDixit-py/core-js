
//"this" in arrow function
function person(name){
    this.name = name ;
    // console.log(this.name);
    setTimeout(function(){
        console.log("this.name",this.name);
    },1000);
}

 person("utkarsh");


 function human(name){
     this.name= name;
    //  console.log(this);
     setTimeout(()=>{
        console.log("this.name",this.name);
    },1000);
 }
 
human("utkarsh2")