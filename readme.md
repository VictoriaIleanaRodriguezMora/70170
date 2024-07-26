# Servidores Web: Manejo de Archivos mediante Servidor con Express | Integración de Clases, fileSystem y Express

## Introducción

En esta sección, exploraremos cómo estructurar un servidor web utilizando Express e integrar el manejo de archivos con el módulo `fileSystem` (fs). Además, ampliaremos la implementación de nuestra clase para manejar productos, cambiando el modelo de persistencia actual en memoria a uno basado en archivos.

## Recordatorio

En la actividad de la Clase 2, estructuramos nuestra primera clase, la cual incluía métodos necesarios para trabajar con un arreglo de productos en memoria. En esta nueva fase, vamos a:

1. **Integrar `fileSystem` (fs)**: Cambiaremos el modelo de persistencia para que los datos de los productos se almacenen en archivos.
2. **Configurar un Servidor con Express**: Utilizaremos Express para exponer rutas que permitirán interactuar con los productos almacenados en archivos.

### [Enlace a la presentación](https://docs.google.com/presentation/d/1vJscesMmwys7SrNkPPjuvD7dHLNK1awl-wuXBdlH6KA/edit#slide=id.p13)

## Consigna

Realizar una clase de nombre `"ProductManager"`.
Ésta debe poder **agregar, consultar, modificar, eliminar un producto** y manejarlo en persistencia de archivos (basado en entregable 1). Luego, mediante un servidor con express se accederán a las funciones desarrolladas en dicha clase `"ProductManager"`.

## Aspectos a incluir

- La clase debe contar con una **variable** `this.path`, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar **desde el momento de generar su instancia**.

- Debe guardar objetos con el siguiente formato:

  - `id` (se debe incrementar automáticamente, no enviarse desde el cuerpo)
  - `title` (nombre del producto)
  - `description` (descripción del producto)
  - `price` (precio)
  - `thumbnail` (ruta de imagen)
  - `code` (código identificador)
  - `stock` (número de piezas disponibles)

- Debe tener un método `addProduct` el cual debe recibir un objeto con el formato previamente especificado, asignarle un **id autoincrementable** y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).

- Debe tener un método `getProducts`, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.

- Debe tener un método `getProductById`, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto

- Desarrollar un servidor express que, en su archivo app.js **importe al archivo de productManager**.


- El servidor debe contar con los siguientes `endpoints`:
    - ruta `‘/products’`, la cual debe leer el archivo de productos y devolverlos dentro de un objeto.
    - ruta `‘/products/:pid’`, la cual debe recibir por `req.params` el pid (product Id), y devolver **sólo el producto solicitado**, en lugar de todos los productos. 


## Formato del entregable

- Link al repositorio de Github con el proyecto completo, el cual debe incluir:
carpeta src con app.js dentro y tu productManager dentro.
package.json con la info del proyecto.
**NO INCLUIR LOS node_modules generados.**
[Como no incluir los node_modules]("https://stackoverflow.com/questions/29820791/git-ignore-node-modules-folder-everywhere")


## Testing de este entregable
[Clase 6 - Testing de Entregable]("https://docs.google.com/document/d/1ihCTk8qiizDgvAlRBsChdM5Xb8Moe_HLk-7ifM02fvw/edit")