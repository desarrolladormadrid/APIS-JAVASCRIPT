import * as UI from "./interfaz.js";
import API from "./api.js";

UI.formularioBuscar.addEventListener("submit", buscarCancion);

function buscarCancion(e) {
  e.preventDefault();
  //leer formulario

  const artista = document.querySelector("#artista").value;
  const cancion = document.querySelector("#cancion").value;

  if (artista == "" || cancion == "") {
    UI.divMensajes.textContent = "Todos los campos son obligarorios";
    UI.divMensajes.classList.add("error");

    setTimeout(() => {
      UI.divMensajes.textContent = "";
      UI.divMensajes.classList.remove("error");
    }, 2000);
    return;
  }

  //consultar api
  const busqueda = new API(artista, cancion);
  busqueda.consultarAPI();
  console.log(busqueda);
}
