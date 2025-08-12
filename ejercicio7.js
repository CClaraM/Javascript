const prompt = require("prompt-sync")();

let var0 = parseInt(prompt("Ingrese el primer número:"));
let var1 = parseInt(prompt("Ingrese el segundo número:"));

console.log(`Múltiplos de 3 entre ${var0} y ${var1}:`);
for (let i = var0; i <= var1; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}