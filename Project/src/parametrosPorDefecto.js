/** 
 *Los parametros por defecto
 *Permite decirle a Javascript
 *Que en caso de que no llegue parametro
 *A una funcion
 *Ejecute cierto comportamiento.
 */
const alerta1 = 'Por favor ingresa tu Telefono';
function registrarUsuario(nombre,pais,email,tel=alerta1){
    return `Nombre: ${nombre}, Pais: ${pais}, Email: ${email}, Telefono:${tel}!`;
 }
 /**
  * En caso de NO enviar un parametro
  * Definimos uno por defecto 
  */
console.log(registrarUsuario('Juan Felipe', 'Colombia', 'vargasjuan367@gmail.com'));
 console.log(registrarUsuario('Juan Felipe','Colombia','vargasjuan367@gmail.com','3005511182'));
 