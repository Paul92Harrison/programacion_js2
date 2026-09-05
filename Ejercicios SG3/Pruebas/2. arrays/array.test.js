// Importamos las funciones de array.js
var { estados, dias } = require('./array.js');

test('Revisamos el contendido de los arreglos', () => {
    expect(estados).toContain('Aguascalientes'); 
    expect(new Set(estados)).toContain('Aguascalientes'); 
});
