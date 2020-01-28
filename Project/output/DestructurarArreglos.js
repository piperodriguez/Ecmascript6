"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *Declaramos un objeto con los atributos
 *De una persona.
 *Nombre, edad, pais, progfesión
 */
var persona1 = ['Juan Felipe', 23, 'Colombia', 'Developer Back End']; //Forma manual Arcaica para acceder a un atributo
//Ejemplo a la profesion de la persona

console.log("la profesi\xF3n de la persona es ".concat(persona1[3]));
/*
 * vamos a estructurar nuestro arreglo para acceder de una forma mas facil
 */

var nombre = persona1[0],
    edad = persona1[1],
    pais = persona1[2],
    profesion = persona1[3];
/*Esta es la manera mas elegante ome*/

console.log("\xC8l nombre del desarrollador es ".concat(nombre));
/*En el caso de que no este defonido una atributo para 
evitar que salga undefined podemos definir un valor por defecto*/

var persona2 = ['Yuri Vanessa', 25,, 'Developer Front End'];
var nombre2 = persona2[0],
    edad2 = persona2[1],
    _persona2$ = persona2[2],
    pais2 = _persona2$ === void 0 ? 'Colombia' : _persona2$,
    profesion2 = persona2[3];
console.log("\xC8l nombre de la desarrolladora es ".concat(nombre2, " y su pais es ").concat(pais2));
/*HASTA AQUI VA EL CODIGO QUEMADO*/
//Creamos una funcion tipo flecha

console.log("manera de mostrar nombre conf cunion");

var mostrarNombre = function mostrarNombre(nombre) {
  console.log(nombre);
};

mostrarNombre(nombre);
mostrarNombre(nombre2);

var mostrarInfoPersona = function mostrarInfoPersona() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : persona,
      _ref2 = _slicedToArray(_ref, 3),
      nombre = _ref2[0],
      edad = _ref2[1],
      _ref2$ = _ref2[2],
      pais = _ref2$ === void 0 ? 'Colombia' : _ref2$;

  console.log("la persona se llama ".concat(nombre, " su edad es de ").concat(edad, " y su pais es ").concat(pais));
};

mostrarInfoPersona(persona1);
mostrarInfoPersona(persona2);