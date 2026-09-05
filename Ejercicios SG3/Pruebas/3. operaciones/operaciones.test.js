//Importamos las funciones de operaciones.js
var {sumar,restar,multiplicar,dividir} = require('./operaciones.js');

//Con Describe describimos un conjunto de pruebas a realizar
describe('Operaciones matemáticas', () => {
  //Con test definimos una prueba específica
  test('Suma de dos números', () => {
    const resultado = sumar(2, 3);
    expect(resultado).toBe(5); // Verifica que el resultado sea 5
  });

  test('Resta de dos números', () => {
    const resultado = restar(5, 3);
    expect(resultado).toBe(2); // Verifica que el resultado sea 2
  });

  test('Multiplicación de dos números', () => {
    const resultado = multiplicar(4, 5);
    expect(resultado).toBe(20); // Verifica que el resultado sea 20
  });

  test('División de dos números', () => {
    const resultado = dividir(10, 2);
    expect(resultado).toBe(5); // Verifica que el resultado sea 5
  });
});