const prompt = require("prompt-sync")();

let inputVar = parseInt(prompt("Ingrese un número:"));
let factorial = 1;

process.stdout.write(`Factorial de ${inputVar} es 0`);
for (let i = 1; i <= inputVar; i++) {
    process.stdout.write(` x ${i}`);
    factorial *= i;
}

process.stdout.write(` = ${factorial}`);