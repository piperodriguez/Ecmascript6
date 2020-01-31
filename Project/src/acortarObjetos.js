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
 const crearObjeto = (nombre, edad) => {
    return {
        nombre: nombre,
        edad: edad,
        mostrarInfo: () =>{
            return `Hola tu nombre es ${nombre} y tu edad es ${edad} años ..`;
        }

    }
 }

 console.log(crearObjeto('Juan Felipe',23).mostrarInfo());
 
