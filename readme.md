### [Enlace a la presentación](https://docs.google.com/presentation/d/1Ue3LTQUxuwKs4c80b71RL4cX5rzNpHwk5GxLkLc62zw/edit#slide=id.g1267f3579e2_0_77)

# Proyecto de node

Actividad de repaso para fortalecer conceptos de node y javascript

- Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. 
- Indicar por consola la finalización de esta operación con un mensaje.
- Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

**Nota**: Considerar que esta operación debe realizarse de forma asíncrona.



### [Enlace a la presentación](https://docs.google.com/presentation/d/1Ue3LTQUxuwKs4c80b71RL4cX5rzNpHwk5GxLkLc62zw/edit#slide=id.g1267f3579e2_0_296)

# HANDS ON LAB | Práctica de módulo nativo: crypto

¿Cómo lo hacemos? 
- Se creará una clase `UsersManager` que permitirá guardar usuarios en un atributo estático. 
- El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. 
- Utilizar el módulo nativo crypto.
- El manager debe contar con los siguientes métodos:
  - El método `"Crear usuario"`  debe recibir un objeto con los campos:
  - `nombre`
  - `apellido`
  - `nombreDeUsuario`
  - `contraseña`
- El método debe guardar un usuario en un atributo estático llamado `"Usuarios"`, **recordando que la contraseña debe estar hasheada por seguridad**

- El método `"mostrarUsuarios"`  imprimirá en consola todos los usuarios almacenados.
- El método `validarUsuario"`  recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje `"logueado"` , caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.
****


### [Enlace a la presentación](https://docs.google.com/presentation/d/1Ue3LTQUxuwKs4c80b71RL4cX5rzNpHwk5GxLkLc62zw/edit#slide=id.g127e5223bb3_0_387)

# Calculadora de edad

Realizando un programa que dependa de módulos externos

- Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
- Debe contar con una variable que almacene la fecha actual (utilizar `moment()`)
- Debe contar con una variable que almacene sólo la fecha de tu nacimiento **(utilizar moment)**.
- Validar con un if que la variable contenga una fecha válida **(utilizar el método `isValid()`)**;
- Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. **(utilizar el método `diff()`)**
- Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.

