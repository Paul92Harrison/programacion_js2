const suma = (vals) => {
    let suma = 0;
    vals.forEach((val) => {
        suma += val;
    });
    return suma;
};

const positivos = (valores) => {
    return valores.filter((x) => x > 0);
};

const negativos = (valores) => {
    return valores.filter((x) => x < 0);
};

const esPrimo = (n) => {
    if (n <= 1 || !Number.isInteger(n)) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const primos = (valores) => {
    return valores.filter(esPrimo);
};

module.exports = {
    suma,
    positivos,
    negativos,
    primos  
};

