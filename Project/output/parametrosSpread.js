"use strict";

console.log("PARAMETROS SPREAD");

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

var arrData = ['Juan Felipe', 23, 'juanfeliperv@hotmail.com', 'Colombia'];
mostrarDatos.apply(void 0, arrData);
var arrData2 = ['Yuri Vanessa', 25, 'yvcastiblanco@hotmail.com', 'Colombia'];
mostrarDatos.apply(void 0, arrData2);