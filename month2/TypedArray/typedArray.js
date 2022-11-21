console.log(new Int8Array());
console.log(new Uint8Array());
console.log(new Uint8ClampedArray());


const typedArray  = new Int8Array(10);
typedArray[0] = 32;
console.log(typedArray);

const buffer = new ArrayBuffer(8);
const arr  = new Int32Array(buffer);

console.log(arr);

