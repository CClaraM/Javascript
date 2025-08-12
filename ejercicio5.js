const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingrese su edad:"));

if (edad < 5) {
    console.log("Entrada gratis.");
} else if (edad <= 18) {
    console.log("El precio es $5,000.");
} else {
    console.log("El precio es $10,000.");
}