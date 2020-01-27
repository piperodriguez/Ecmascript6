/*
 + Identificar la longitud de caracteres de elementos de un array
*/
//Declaramos un array de nombre
const nombres = ['Felipe','Vanessa','Javier','Brayam','Romano','Pochinky'];
//El metodo map() de javascrit permite iterar sobre cada uno de los leementos y ejecutar un funcion

//FORMA TRADICIONAL DE ESCRIBIR ESTO
/*const numeroCaracteres = nombres.map(function(nombre){
    console.log(`${nombre} tiene ${nombre.length} numero de caracteres`);
});*/
//AHORA VAMOS A USAR LAS FUNCION TIPO FLECHA
/*const numeroCaracteres = nombres.map((nombre) => {
    console.log(`${nombre} tiene ${nombre.length} numero de caracteres`);
});*/

const numeroCaracteres = nombres.map((nombre) => `${nombre} tiene ${nombre.length} numero de letras`);

console.log(numeroCaracteres);

