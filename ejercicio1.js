const prompt = require("prompt-sync")();

let var0 = parseInt(prompt("Ingrese un número:"));

if (var0 % 2 === 0) {
    console.log(`${var0} es par.`);
} else {
    console.log(`${var0} es impar.`);
}