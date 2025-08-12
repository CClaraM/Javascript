const prompt = require("prompt-sync")();

let var0 = parseInt(prompt("Ingrese el primer número:"));
let var1 = parseInt(prompt("Ingrese el segundo número:"));

let inicio = Math.min(var0, var1);
let fin = Math.max(var0, var1);

let sumaPares = 0;
let sumaImpares = 0;
let contImpares = 0;

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
        contImpares++;
    }
}

let promedioImpares = contImpares > 0 ? (sumaImpares / contImpares) : 0;

console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Promedio de números impares: ${promedioImpares}`);