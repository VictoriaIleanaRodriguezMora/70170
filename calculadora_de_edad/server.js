const moment = require("moment");

const fechaActual = moment().format("LLL");

const fechaNacimiento = moment("2004-09-09", "YYYY-MM-DD");
const isValid = fechaNacimiento.isValid();

if (isValid) {
  console.log("La fecha es válida");
} else {
  console.log("La fecha no es válida");
}



