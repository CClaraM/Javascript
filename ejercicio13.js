const prompt = require("prompt-sync")();
let decimal = parseInt(prompt("Ingrese un número decimal:"));
let binario = decimal.toString(2);

console.log(`${decimal} en binario es: ${binario}`);