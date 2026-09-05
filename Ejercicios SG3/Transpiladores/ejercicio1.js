const array = [1, 2, 3, 4, 5];

const getRandomNumber = () => {
  return Math.ceil(Math.random() * 6);
}

function add  (a=5, b=10) {
  return a + b;
}
console.log(add()); 

var add = (a, b) => {
  return a + b;
}

function* Hola() {
  yield "Hola";
  yield "Mundo";
  yield "!";
}

var helloInstance = Hola();
console.log(helloInstance.next().value); // "Hola"
console.log(helloInstance.next().value); // "Mundo"
console.log(helloInstance.next().value); // "!"
console.log(helloInstance.next().value); // undefined   