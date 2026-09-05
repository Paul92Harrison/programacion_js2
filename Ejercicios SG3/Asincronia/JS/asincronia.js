/*//Sicronia
(function () {
  console.log("Código Síncrono");
  console.log("Inicio");
  function dos() {
    console.log("Dos");
  }
  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }
  uno();
  console.log("Fin");
})();

//Asincronia

(function () {
  console.log("Código Asíncrono");
  console.log("Inicio");
  function dos() {
    console.log("Dos");
  }
  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }
  uno();
  console.log("Fin");
})();

//Callback Hell

function cuadradoCallback(valor, callback) {
  let delay = Math.random() * 1000;

  setTimeout(() => {
    callback(valor, valor * valor);
  }, delay);
}

cuadradoCallback(0, (valor, resultado) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${valor}, ${resultado}`);
  cuadradoCallback(1, (valor, resultado) => {
    console.log(`Callback: ${valor}, ${resultado}`);
    cuadradoCallback(2, (valor, resultado) => {
      console.log(`Callback: ${valor},
${resultado}`);
      cuadradoCallback(3, (valor, resultado) => {
        console.log(`Callback: ${valor}, ${resultado}`);
        cuadradoCallback(4, (valor, resultado) => {
          console.log(`Callback: ${valor}, ${resultado}`);
          cuadradoCallback(5, (valor, resultado) => {
            console.log(`Callback: ${valor},
${resultado}`);
          });
        });
      });
    });
  });
}); 

//Promesas

function cuadradoPromesa(valor) {
  if (typeof valor !== "number") {
    return Promise.reject(`Error, el valor ingresado ${valor} no es un número`);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        value: valor,
        result: valor * valor,
      });
    }, Math.random() * 1000);
  });
}

//Encadenamiento de promesas

cuadradoPromesa(0)
  .then((obj) => {
    console.log("Inicia Promesa");

    console.log(`Promesa: ${obj.value}, ${obj.result}`);

    return cuadradoPromesa(1);
  })

  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);

    return cuadradoPromesa(2);
  })

  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);

    return cuadradoPromesa(3);
  })

  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);

    return cuadradoPromesa(4);
  })

  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);

    return cuadradoPromesa(5);
  })

  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);

    console.log("Fin Promesa");
  })

  .catch((err) => console.error(err)); */

//async & await

// Función que devuelve una promesa con el cálculo del cuadrado

function cuadradoAsincrona(valor) {
  return new Promise((resolve, reject) => {
    if (typeof valor !== "number") {
      reject(`Error, el valor ingresado ${valor} no es un número`);

      return;
    }

    setTimeout(() => {
      resolve({ value: valor, result: valor * valor });
    }, Math.random() * 3000);
  });
}

// Función asíncrona declarada con async/await

async function funcionAsincronaDeclarada() {
  try {
    console.log("inicio Async Function");

    let obj = await cuadradoAsincrona(0);

    console.log(`Async Function: ${obj.value},${obj.result}`);

    // Repetir para numeros del 1 al 5

    obj = await cuadradoAsincrona(1);
    console.log(`Async Function: ${obj.value},${obj.result}`);

    obj = await cuadradoAsincrona(2);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoAsincrona(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoAsincrona(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoAsincrona(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function");
  } catch (error) {
    console.error(error);
  }
}
