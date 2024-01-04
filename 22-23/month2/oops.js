//ENCAPSULATION
//procedural programming
//functions are separated from variables

let baseSalary = 30000;
let overtime = 20000;
let rate = 20;

function getWage(baseSalary,overtime,rate){
    return baseSalary + (overTime * rate);
}

//encapsulated
let employee = {
    baseSalary : 3000,
    overtime : 25000,
    rate : 20,
    getWage : function(){
        return this.baseSalary + (this.oberTime + this.rate);
    }
}

employee.getWage();

//INHERITANCE 
// example 1
class myPersonalError extends Error {
    constructor(message){
        super(message); // super is used to call parent's constructor method; 
        this.name = "myPersonalError";
        // this.message = message;
    }
}
// example2
class p{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`HEY ${this.name}`);
    }
}

//inheriting from parent
class Employee extends p{

}

let employee1 = new Employee('utkarsh');
employee1.greet();


function abc(){
    throw  new myPersonalError('my error');
}
abc();

//POLYMORPHISM
//same function is called many times with different signature
//example
class firstClass{
    add(){
        console.log("FIRST");
    }
}

class secondClass extends firstClass{
    add(){
        console.log("Second");
    }
}
class thirdClass extends secondClass{
    add(){
        console.log("Last");
    }
}

    var ob1 = new firstClass();
    var ob2 = new secondClass();
    var ob3 = new thirdClass();

    ob1.add();
    ob2.add();
    ob3.add();
