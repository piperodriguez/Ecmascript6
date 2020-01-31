"use strict";

/**
 * Manera para interactuar con objetos javascript
 * Crear una funcion que permita crear objetos.
 * 
 */

/**
 * FUNCION FLECHA
 * funcion crearObjeto()
 * @param {*} nombre 
 * @param {*} edad 
 * @return Objeto
 */
var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "Hola tu nombre es ".concat(nombre, " y tu edad es ").concat(edad, " a\xF1os ..");
    }
  };
};

console.log(crearObjeto('Juan Felipe', 23).mostrarInfo());