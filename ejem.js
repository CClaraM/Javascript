const prompt = require("prompt-sync")();

let cuenta = {
    titular:"Monik Galindo",
    saldo: 2500000,
    mostrarSaldo: function(){
        console.log(`El sualdo del usuario ${this.titular} es de $${this.saldo}`);
    }
}

cuenta.mostrarSaldo();
cuenta.saldo -= 1000000;
cuenta.mostrarSaldo();

let numeros = [];
numeros.push(5);
numeros.push(7);
numeros.unshift(20);
console.log(numeros);
numeros.push(100,25);
console.log(numeros);

for (let i=0;i<numeros.length;i++){
    console.log(`numeros ${numeros[i]} en la posicion ${i}`);
}

numeros.forEach((numero,i) => (console.log(`numero ${numero} en la posicion ${i}`))  
);

let values=[5,2,7,2,3,9,1];
let cuadrados = values.map(x=>x*x);
console.log(cuadrados);

let cuadro=[];

values.forEach(element => {
    cuadro.push(element*element);
})

console.log(cuadro);

let suma=0;
values.forEach(element =>{
    suma += element
})

console.log(`la suma de los numeros es ${suma}`);

let resultado = values.filter(x=>x>5);
console.log(resultado);