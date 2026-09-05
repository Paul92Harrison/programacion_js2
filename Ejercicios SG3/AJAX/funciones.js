function CargarDocumento() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

function CargarDocumento() {
  fetch("ajax_info.txt")
    .then((res) => {
      if (!res.ok) throw new Error("Archivo no disponible");
      return res.text();
    })

    .then((data) => {
      document.getElementById("demo").innerHTML = data;
    })

    .catch((err) => {
      document.getElementById("demo").innerHTML = err.message;
    });
}