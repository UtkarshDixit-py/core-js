//sort by name
const students = [{name: 'Sara', age:24},{name: 'Jaack', age:24}, {name: 'Jack', age:25}];

function abc2(a,b){
    let name1 = a.name.toUpperCase();
    let name2 = b.name.toUpperCase();

    let ans = 2;

    if(name1 > name2){
        ans = 1;
    }
    else if(name1 < name2){
        ans = -1;
    }
    return ans;
}

console.log(students.sort(abc2))

