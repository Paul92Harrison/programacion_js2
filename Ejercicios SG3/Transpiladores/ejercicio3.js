var str = 'Copa de Futbol';

console.log(str.includes('Copa')); // true
console.log(str.includes('Torneo')); // false

// Part2 
class miClase {
constructor(a, b){
this.result = a + b;

}
}

const miFuncion = (a, b) => a + b;
const resultado = [1, 2].reduce ((a, b) => a + b, 0);


// part 3
// Simulacion de clase usando funcion constructora
function miClase(a, b) {
    this.result = a + b;
}

// Funcion tradicional (en lugar de arrow function)
function miFuncion(a, b) {
    return a + b;
}

// reduce() si funciona en IE11
var resultado = [1, 2].reduce(function (a, b) {
    return a + b;
}, 0);

console.log("Resultado con reduce:", resultado);

// Probando la clase
var instancia = new miClase(5, 7);
console.log("Resultado en miClase:", instancia.result);