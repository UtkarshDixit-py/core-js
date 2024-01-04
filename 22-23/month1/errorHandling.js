 
//  try catch finally
//try catch only handles runtime errors 

try{
    console.log('start of try');

    anything;
    
    console.log('end of try ');

    
}
catch(err){
    console.log("error has occured" + err);
}
finally{
    console.log('this will run regardless of try and catch');
}

//throw

let json = '{"age" : 30}';

try{
    let user = JSON.parse(json);
    if(!user.name){
       
         throw new Error("Incomplete data: no name"); // throws error object with name and message;
                //SyntaxError
                //ReferenceError
                //RangeError


        // throw "error here"
       
    }
    console.log(user.name);


}catch(e){
    console.log("JSON Error" + e);
}
//USER DEFINED ERROR------------

class userDefinedError extends Error{
    constructor(message){
        super(message);
        this.name = "userDefinedError";
    }
}
try{
    let user = JSON.parse(json);
    if(!user.name){
       
         throw new userDefinedError("Incomplete data: no name"); // throws error object with name and message;
                //SyntaxError
                //ReferenceError
                //RangeError
        // throw "error here"
       
    }
    console.log(user.name);
}
catch(e){
    console.log("JSON user defined Error Error" + e.name);
}

