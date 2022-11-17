//Important object methods 
console.log("-----Important object methods -----")



    //Object.assign(target object,source object)

    //merging two objects
    let man = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        ssn: '123-456-2356'
    };
    
    
    let job = {
        jobTitle: 'JavaScript Developer',
        location: 'USA'
    };
    
    // way1
    let emp = {
        ...man,
        ...job
    }
    //way2
    let emp2 = Object.assign(man,job);
    
    //way to make a deep copy
    let deepCopyObj = JSON.parse(JSON.stringify(man));
    console.log(deepCopyObj);



    //Object.entries(object);
    const object1 = {
        a: 'somestring',
        b: 42
      };
    
     console.log(Object.entries(object1)); 
     console.log(Object.keys(object1)); 
     console.log(Object.values(object1)); 



// object.freeze(obj)
const randomObj = {
    prop:12
};

Object.freeze(randomObj);
randomObj.prop = 55; //throws and error in strict mode 

console.log(randomObj.prop) //12

console.log(Object.isFrozen(randomObj));




//Object.is(obj1,obj2)

console.log(0===-0);
console.log(Object.is(0,-0));

console.log(NaN === Number.Nan);//false
console.log(Object.is(NaN, Number.NaN)); // true




    //Object.defineProperties(obj, props)
    const defineObj = {};
    Object.defineProperties(defineObj,{
        property1:{
            value: 585,
            writable: true, //defaults to false
            configurable:true, //false by default
            enumerable: true, //false by default
    
        },
        property:{}
    });
    
    console.log("defineProperties", defineObj.property1);
    



    // Object.defineProperty(obj, prop, descriptor)

    Object.defineProperty(defineObj,"property3",{
        value:42,
        writable: false
    })
    defineObj.property3 = 77;
    //throws error in strict mode
    
    console.log(defineObj.property3); //output is 42
    



    //Object.setPrototypeOf(obj,prototype)
    function Human(name,powerLevel){
        this.name = name;
        this.powerLevel = powerLevel;
    }
    function SuperHero(name,powerLevel){
        Human.call(this,name,powerLevel);
    }
    
    Object.setPrototypeOf(SuperHero.prototype,Human.prototype);
    
    Human.prototype.speak = function(){
        return `${this.name} says hello`;
    }
    const batman = new SuperHero("bruce",10);
    console.log(batman.speak());
    console.log(Object.getPrototypeOf(batman));
    

