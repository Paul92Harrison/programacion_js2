const { suma, positivos, negativos, primos } = require('./valoresNumericos');

describe('Pruebas para la función suma', () => {
  test('Suma de números positivos', () => {
    expect(suma([1, 2, 3])).toBe(6);
  });

  test('Suma con números negativos y positivos', () => {
    expect(suma([-1, 2, -3, 4])).toBe(2);
  });

  test('Suma de arreglo vacío', () => {
    expect(suma([])).toBe(0);
  });
});

describe('Pruebas para la función positivos', () => {
  test('Filtra solo números positivos', () => {
    expect(positivos([-2, 0, 3, 5, -1])).toEqual([3, 5]);
  });

  test('Sin positivos', () => {
    expect(positivos([-1, -5, -10])).toEqual([]);
  });

  test('Todos son positivos', () => {
    expect(positivos([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe('Pruebas para la función negativos', () => {
  test('Filtra solo números negativos', () => {
    expect(negativos([-2, 0, 3, -1])).toEqual([-2, -1]);
  });

  test('Sin negativos', () => {
    expect(negativos([0, 2, 4])).toEqual([]);
  });

  test('Todos son negativos', () => {
    expect(negativos([-3, -4, -5])).toEqual([-3, -4, -5]);
  });
});

describe('Pruebas para la función primos', () => {
  test('Filtra los números primos en un arreglo', () => {
    expect(primos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 3, 5, 7]);
  });

  test('Ningún número primo', () => {
    expect(primos([0, 1, -3, 4, 6, 8, 9])).toEqual([]);
  });

  test('Todos son primos', () => {
    expect(primos([2, 3, 5, 7, 11])).toEqual([2, 3, 5, 7, 11]);
  });

  test('Incluye valores no enteros o negativos', () => {
    expect(primos([2, 3.5, -7, 7])).toEqual([2, 7]); // solo enteros positivos
  });
});

