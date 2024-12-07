// suma es una funcion
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

suma(1, 0)
    .then((res) => { console.log("*", res); })
    .catch((e) => { console.log("*", e); })

suma(1, -5)
    .then((res) => { console.log("**", res); })
    .catch((e) => { console.log("**", e); })
suma(1, 5)
    .then((res) => { console.log("***", res); })
    .catch((e) => { console.log("***", e); })