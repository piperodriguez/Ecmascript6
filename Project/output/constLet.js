"use strict";

/*//Variable declaracion ecmascript			
let nombre = "Juan Felipe";
let apellido = "Rodriguez Vargas";
let edad = 23;


console.log(`¡Hello ${nombre}! your last name is ${apellido} ?`);

/**Declaracion de variables */
//mala practica logica permitir redeclarar el valor de la variable

/*var sexo = "Femenino";
var sexo = "Masculino";

console.log(`¡tu sexo es ${sexo}!`);

//remplza el valor original

//LET
// no permite redeclarar el valor de la variable respetando su valor inicial.

//SCOP DE JAVASCRIPT -> lo poseemos protege la variable
let pais = "Unitated States";
let pais = "Venezuela";
console.log(`¡Welcome to ${pais}!`);
*/
//LET aplicando scop
function saludo() {
  var nombre = 'Juan Felipe';
  return "\xA1Hola ".concat(nombre, "!");
} //para ejecutar esta funcion


console.log(saludo());
/*Ee¡jemplo uso variable let*/

var edad = 18;

if (edad >= 18) {
  var requisitoEdad = true;
  console.log("La persona es mayor de edad ".concat(requisitoEdad));
}