const idiomaIngles = 'en-US';
const idiomaEspañol = 'es-ES';
const idiomaFrances = 'fr-FR';

function lenguajePagina(lenguaje) {
    switch (lenguaje.toLowerCase()) {
        case idiomaIngles.toLowerCase():
            return '/about-us';
        case idiomaEspañol.toLowerCase():
            return '/acerca-de-nosotros';
            case idiomaFrances.toLowerCase():
            return'/a-propos';


    }
    return '';
}
module.exports = lenguajePagina