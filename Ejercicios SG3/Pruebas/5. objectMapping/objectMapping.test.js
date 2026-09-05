
const getObjectDescription = require('./objectMapping');

describe('Pruebas para getObjectDescription', () => {

  // a. Garantiza que “getObjectDescription” exista.
  test('a. La función getObjectDescription debe existir', () => {
    expect(typeof getObjectDescription).toBe('function');
  });

  // b. Usa el método con un parámetro que existe en el objeto.
  test('b. Retorna "Activo" cuando el parámetro es "ACTIVO"', () => {
    expect(getObjectDescription('ACTIVO')).toBe('Activo');
  });

  // c. Usa el método con un parámetro que no exista.
  test('c. Retorna undefined cuando el parámetro no está en el objeto', () => {
    expect(getObjectDescription('ARCHIVADO')).toBeUndefined();
  });

  // d. Usa el método con un parámetro vacío.
  test('d. Retorna mensaje cuando el parámetro está vacío', () => {
    expect(getObjectDescription('')).toBe("El parámetro 'tipo' no existe");
  });

  // e. Usa el método sin parámetro.
  test('e. Retorna mensaje cuando no se pasa ningún parámetro', () => {
    expect(getObjectDescription()).toBe("El parámetro 'tipo' no existe");
  });

});

