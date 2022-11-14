//maps
let map = new Map(); //creates a map 

map.set("1","str1");
map.set(1,'num1'); //numeric key
// map.set(1,"second1") //this will replace above key value pair

console.log(map.get(1)) //num1;
console.log(map.has(6));
console.log(map.size);

console.log(map.values());

console.log(map.keys()); //return an iterable for keys
console.log(map.entries());

//Set
//does not store key value pairs
let set = new Set();
set.add(5);
set.add(5);
set.add(6);
set.add(7);
set.add(8);
console.log(set);
console.log(set.size);
console.log(set.delete(5));
console.log(set.has(6)); 
