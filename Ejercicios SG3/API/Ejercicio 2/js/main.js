const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  //Toma la información del formulario y la convierte en un objeto
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Respuesta de la API;", data))
    .catch((error) => console.error("Error:", error));
});
