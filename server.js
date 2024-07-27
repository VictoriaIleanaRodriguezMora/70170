const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  // console.log(`http://localhost:${port}`);
});

class TicketManager {
  constructor() {

    this.eventos = [];
    this._precioBaseDeGanancia = 0;

  }


  getEventos() {
    return this.eventos
  }

  addEvento(nombre, lugar, precio, capacidad, fecha) {

    const id = this.eventos.length++
    const participantes = []

    const eventToAdd = {
      nombre,
      lugar,
      precio,
      capacidad,
      fecha,
      id
    }

    console.log("Se agrega el siguiente evento: ", eventToAdd);
    console.log(this.eventos);
    return this.eventos = [...this.eventos, eventToAdd]

  }

  agregarUsuario(id_evento, id_usuario) {

    const encontrarIdEvento = this.eventos.find((event) => {
      if (event.id === id_evento) {
        console.log("El evento existe");
        return "El evento existe"
      }
    })


  }






}

