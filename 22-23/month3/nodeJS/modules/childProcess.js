let cp = require("child_process");

console.log("trying to open calculator");
// cp.execSync('calc');
cp.execSync("start chrome https://www.google.com")

console.log("opened google");

let output = cp.execSync("node abc.js");
console.log("output" + output)