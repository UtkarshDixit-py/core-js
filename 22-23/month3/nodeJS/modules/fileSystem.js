// //       create ,         read         , update             delete 
// //Files
// //       open -w           readFileSync  appendFileSync      unlinkSync
// //       writeFileSync

// // Folders
// //      mkdirSync           readDirSync                      rmdirSync


let fs = require("fs");
//  let buffer = fs.readFileSync("abc.js"); //sends file data in binary

// //  console.log("bin data", buffer);
// console.log("bin data " + buffer); //will be able to see in string because of +

// // fs.openSync("abc.txt","w"); //w means write mode

// //writeFile creates if there was no file 
// fs.writeFileSync("abc.txt","using nodejs to write in another file(writeFileSync)"); //replaces content

// fs.appendFileSync("abc.txt","using append function from node");

// // create folder
// // fs.mkdirSync("myNewDirectory");

// //create file in specific folder
// fs.writeFileSync("myNewDirectory/myFile.txt" , "my content")

let content = fs.readdirSync("myNewDirectory");

console.log(content)

//remove file
for(let i = 0; i<content.length;i++){
    console.log("file", content[i],"is removed");
    fs.unlinkSync("myNewDirectory/" + content[i])
}

//remove folder
// fs.rmdirSync("myNewDirectory")

//fs.existSync -> if a file exists at a path ->true/false
let doesPathExist = fs.existsSync("abc.txt");
console.log(doesPathExist);
doesPathExist = fs.existsSync("abcs.txt");
console.log(doesPathExist);

//fs.lstatSync -> tells if the path given is of a file or a folder
let detailObj = fs.lstatSync(__dirname + "\\fileSystem.js");
console.log(detailObj)
let ans = detailObj.isFile();
console.log(ans);
ans = detailObj.isDirectory();
console.log(ans)

// C:\Users\ASUS\Desktop\core-js\month3\nodeJS\modules
for(let i = 0; i<=10;i++){
    let dirPathToMake = `Lecture -${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md", `#readme for ${dirPathToMake}` )
}