const prompt = require("prompt-sync")();
let input = parseInt(prompt("Ingrese el número de filas:"));

for (let i = 1; i <= input; i++) {
    console.log("*".repeat(i));
}