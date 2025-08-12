const prompt = require("prompt-sync")();

let var0 = parseInt(prompt("Ingrese un número entre 1 y 20:"));
let frase = prompt("Ingrese una frase:");

if (var0 >= 1 && var0 <= 20) {
    for (let i = 1; i <= var0; i++) {
        console.log(frase);
    }
} else {
    console.log("Número fuera de rango.");
}