const students = [{name: 'Sara', age:24},{name: 'Jaack', age:24}, {name: 'Jack', age:25}];
//sort property by age 

function abc(a,b){
    return a.age - b.age; // if difference is negative value order is changed 
    
}

console.log(students.sort(abc));


