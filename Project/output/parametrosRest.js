"use strict";

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

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  console.log(data);
  var nombre = data[0],
      edad = data[1],
      email = data[2],
      pais = data[3];
  console.log(nombre);
};

mostrarDatos('Juan Felipe', 23, 'juanfeliperv@hotmail.com', 'Colombia');
console.log("----------------------------------------");