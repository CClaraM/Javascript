const prompt = require("prompt-sync")();
let var0 = parseFloat(prompt("Ingrese su salario mensual:"));
let impuesto = 0;

if (var0 <= 2000000) {
    impuesto = var0 * 0.05;
} else if (var0 <= 5000000) {
    impuesto = var0 * 0.10;
} else {
    impuesto = var0 * 0.15;
}

console.log(`Debe pagar de impuesto: $${impuesto.toFixed(0)}`);