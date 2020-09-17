import * as UI from "./interfaz.js";

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }
  consultarAPI() {
    console.log("desde consultar api");
    //const url = `https://private-anon-fe04dde1a6-lyricsovh.apiary-mock.com/v1/${this.artista}/${this.cancion}`;
    const url_ = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
    fetch(url_)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        const Lyrics = resultado;
        let prueba = JSON.stringify(Lyrics);
        prueba = JSON.parse(prueba);
        UI.divResultado.textContent = `<p>${prueba.lyrics} a ver k sale</p>`;
        UI.headdingResultado.innerHTML = `<h2>LETRA DE LA CANCION DE  ${this.artista} </h2>
        <pre>${prueba.lyrics}</pre>`;
        console.log(prueba);
        console.log(prueba.lyrics);
      });
  }
}

export default API;
