"use strict";

/**
 * Destructurar Objetos es sumamente Necesario Aprenderlo
 * Ya que muchos frameworks lo requieren
 */
//CREACION DE UN OBJETO
var user = {
  username: 'frodriguez',
  password: 'solati123',
  profession: 'Developer Back End',
  age: 23 //country: "Colombia"

}; //FORMA ARCAICA DE OBTENER ATRIBUTO DE UN OBJETO

console.log(user.username); //DESTRUCTURAMOS EL OBJETO

var username = user.username,
    password = user.password,
    _user$country = user.country,
    country = _user$country === void 0 ? "No identificado" : _user$country;
console.log("1) Llamando propiedad del objeto destructurado USER");
console.log(username);
console.log(password); //Si se trata de acceder a una propiedad del objeto que no existe se le puede dar un valor por defecto

console.log(country); //Ahora ejecutar cod mediane una funcion

var getUsuario = function getUsuario(_ref) {
  var username = _ref.username,
      password = _ref.password,
      _ref$sexo = _ref.sexo,
      sexo = _ref$sexo === void 0 ? 'Masculino' : _ref$sexo;
  alert("El usuario que quiere ingresar tiene los siguientes \n    datos username : ".concat(username, " y Password: ").concat(password, " ,Sexo: ").concat(sexo));
};

getUsuario(user);