"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Primer letra del nombre de una clase en MAYUSCULA
 *
 */
var Usuario =
/*#__PURE__*/
function () {
  /**
   * Creaciòn del Constructor
   * El constructor se ejecuta cada vez que se declare
   * Una nueva instancia de la clase
   * new Usuario()
   * Declaramos atributos de la clase
   */
  function Usuario(username, password, profession) {
    _classCallCheck(this, Usuario);

    //Propiedades
    this.username = username, this.password = password, this.profession = profession, this.activo = true;
  }
  /**
   * Declaraciòn de metodos o funciones de la clase
   */


  _createClass(Usuario, [{
    key: "getUsername",
    value: function getUsername(username) {
      alert("Hola como estas bienvenido ".concat(username));
    }
  }, {
    key: "solicitarProfesion",
    value: function solicitarProfesion(profesion) {
      return "tu profesiòn es " + profesion + "<br>";
    }
  }, {
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n            Username: ".concat(this.username, "<br />\n            Profesion: ").concat(this.profession, "<br />\n        ");
    }
  }]);

  return Usuario;
}();

var usuario1 = new Usuario('frodriguez', 'solati123', 'Developer Back End');
usuario1.getUsername(usuario1.username);
document.write("Este es tu username: ".concat(usuario1.username, " <br>"));
document.write(usuario1.solicitarProfesion(usuario1.profession));
document.write(usuario1.mostrarInfo());
/*document.write(usuario1.password);
document.write(usuario1.activo);*/

var usuario2 = new Usuario('yvcastiblanco5', 'lunayflorecita', 'Developer Front End');
usuario1.getUsername(usuario2.username);
document.write("Este es tu username: ".concat(usuario2.username, " <br>"));
document.write(usuario2.solicitarProfesion(usuario2.profession));
/**
 * Herencia de la clase Usuario
 */

var Persona =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Persona, _Usuario);

  function Persona(username, password, profession, sexo) {
    var _this;

    _classCallCheck(this, Persona);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Persona).call(this, username, password, profession));
    _this.sexo = sexo;
    return _this;
  }

  _createClass(Persona, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n            Username: ".concat(this.username, "<br />\n            Profesion: ").concat(this.profession, "<br />\n            Profesion: ").concat(this.sexo, "<br />\n            <hr />\n        ");
    }
  }]);

  return Persona;
}(Usuario);

var usuario3 = new Persona('rcalderon', 'solati123', 'Enginner Sopport', 'Femenino');
document.write(usuario3.mostrarInfo());