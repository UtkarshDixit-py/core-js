//maps
let map = new Map(); //creates a map 

map.set("1","str1");
map.set(1,'num1'); //numeric key
map.set("okok", "value");
// map.set(1,"second1") //this will replace above key value pair

console.log(map.get(1)) //num1;
console.log(map.has(6));
console.log(map.size);

console.log(map.values());

console.log(map.keys()); //return an iterable for keys
console.log(map.entries());
//try setting with null and undefined on both set maps as keys 
// does map support concurency 
// how to iterate with arrow functions
//weakmap , weakset ,hashmap what is the diffeence  
//when to use map and when to use set 
// setPrototypeOf()
//ways to create maps and etc 
//write syntax in commments 
//ways to iterate in general
// 

// {
//     [key, value],
//     [key, value],
//     [key, value]

// }


// let iterable = ;
let arr =[]
for(let i of map.entries()){
    // console.log( i + "\n");
    map.set("key","value");
}
// map.delete("okok");
// console.log(map);
console.log("adding while in loop",map);



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
