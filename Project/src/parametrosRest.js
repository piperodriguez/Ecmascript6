/**
 * Va permitir trabajar con parametros
 * dentro de las funciones de una
 * forma mas sencilla
 * permite pasar un numero indfinido de parametros y recibirlos facil
 */
console.log("ENVIO DE PARAMETROS REST");

/**
 * 
 * @param  {...any} data esto es un parametro rest ...data
 */
 const mostrarDatos = (...data) => {
     console.log(data);
     const [nombre,edad,email,pais] = data;
     console.log(nombre);
 }

 mostrarDatos('Juan Felipe', 23, 'juanfeliperv@hotmail.com','Colombia');

 console.log("----------------------------------------");
 