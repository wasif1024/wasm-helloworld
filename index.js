import fs from "fs";

const mathWasm=fs.readFileSync('./math.wasm');
const math=await WebAssembly.instantiate(new Uint8Array(mathWasm)).
then(res=>res.instance.exports);
//console.log(mathWasm);
console.log(math.square(10));