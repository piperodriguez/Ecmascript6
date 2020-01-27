"use strict";

/** 
 *Los parametros por defecto
 *Permite decirle a Javascript
 *Que en caso de que no llegue parametro
 *A una funcion
 *Ejecute cierto comportamiento.
 */
var alerta1 = 'Por favor ingresa tu Telefono';

function registrarUsuario(nombre, pais, email) {
  var tel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : alerta1;
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Email: ").concat(email, ", Telefono:").concat(tel, "!");
}
/**
 * En caso de NO enviar un parametro
 * Definimos uno por defecto 
 */


console.log(registrarUsuario('Juan Felipe', 'Colombia', 'vargasjuan367@gmail.com'));
console.log(registrarUsuario('Juan Felipe', 'Colombia', 'vargasjuan367@gmail.com', '3005511182'));