/**
 * Esta función devuelve una promesa que se resuelve después de 2 segundos.
 * La promesa devuelve un mensaje indicando que la respuesta se recibió después de 2 segundos.
 */

function responderDespues2sec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Respuesta después de 2 segundos");
    }, 2000);
  });
}

/**
 * Esta función asíncrona llama a la función responderDespues2sec y espera su respuesta.
 * Luego, imprime la respuesta en la consola.
 */

async function asyncCall() {
  try {
    console.log("Llamando a la función...");
    const respuesta = await responderDespues2sec();
    console.log(respuesta);
  } catch (error) {
    console.error("Error:", error);
  }
}

/**
 * Llamamos a la función asyncCall para ejecutar el código asíncrono.
 */
asyncCall();