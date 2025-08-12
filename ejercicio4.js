const prompt = require("prompt-sync")();
let dia = parseInt(prompt("Ingrese un número entre 1 y 7:"));
let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

if (dia >= 1 && dia <= 7) {
    console.log(`El día es: ${diasSemana[dia - 1]}`);
} else {
    console.log("Número fuera de rango");
}