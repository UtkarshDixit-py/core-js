const person = {
    name: 'John',
    age: 21,
}

const clonePerson = Object.assign({},person);
clonePerson.age = 888;
const clonePerson2 = new Object(person);
clonePerson2.age = 2;
console.log(clonePerson);
console.log(clonePerson2);




  var obj = {
    
    value: 10
};

Object.seal(obj);

obj.value = 20;
console.log(obj.value);