
const suma = (nro1, nro2) => {
    return new Promise((resolve, reject) => {
        if (nro1 === 0 || nro2 === 0) {
            reject("Operación Innecesaria")
        }
        if (Math.sign(nro1 + nro2) === (-1)) {
            reject("La calculadora sólo debe devolver valores positivos")

        }
        resolve(`El resultado es: ${nro1 + nro2}`)
    })
}

/* suma(1, 0)
    .then((res) => { console.log("Suma 1 -", res); })
    .catch((e) => { console.log("Suma 1 -", e); })

suma(1, -5)
    .then((res) => { console.log("Suma 2 -", res); })
    .catch((e) => { console.log("Suma 2 -", e); })
suma(1, 5)
    .then((res) => { console.log("Suma 3 -", res); })
    .catch((e) => { console.log("Suma 3 -", e); }) */

// Resta 
const resta = (nro1, nro2) => {
    return new Promise((resolve, reject) => {
        if (nro1 === 0 || nro2 === 0) {
            reject("Operación inválida")
        }
        if (Math.sign(nro1 - nro2) === (-1)) {
            reject("La calculadora sólo debe devolver valores positivos")

        }
        resolve(`El resultado es: ${nro1 - nro2}`)
    })
}

resta(1, 0)
    .then((res) => { console.log("Resta 1 -", res); })
    .catch((e) => { console.log("Resta 1 -", e); })

resta(1, -5)
    .then((res) => { console.log("Resta 2 -", res); })
    .catch((e) => { console.log("Resta 2 -", e); })
resta(1, 5)
    .then((res) => { console.log("Resta 3 -", res); })
    .catch((e) => { console.log("Resta 3 -", e); })