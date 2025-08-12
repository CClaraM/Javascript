const prompt = require("prompt-sync")();

let var0 = parseInt(prompt("Ingrese un número entero:"));
let var1 = 0;

let temp = Math.abs(var0);

if (temp === 0) {
    var1 = 0;
} else {
    while (temp > 0) {
        var1 += temp % 10;
        temp = Math.floor(temp / 10);
    }
}

console.log(`La suma de los dígitos de ${var0} es: ${var1}`);