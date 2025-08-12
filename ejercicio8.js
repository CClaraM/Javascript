const prompt = require("prompt-sync")();

let temp = parseInt(prompt("Ingrese un número entero:"));
let esPrimo = temp > 1;

for (let i = 2; i <= Math.sqrt(temp); i++) {
    if (temp % i === 0) {
        esPrimo = false;
        break;
    }
}

console.log(esPrimo ? `${temp} es primo` : `${temp} no es primo`);