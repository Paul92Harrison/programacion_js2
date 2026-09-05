const lenguajePagina = require('./lenguajes');

test('Revisamos el valor de retorno del lenguaje seleccionado', () => {
    expect(lenguajePagina('es-ES')).toBe('/acerca-de-nosotros');
    expect(lenguajePagina('en-US')).toBe('/about-us');
    expect(lenguajePagina('fr-FR')).toBe('/a-propos');
})