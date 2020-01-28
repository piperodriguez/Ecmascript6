/**
 *Declaramos un objeto con los atributos
 *De una persona.
 *Nombre, edad, pais, progfesión
 */

const persona1 = ['Juan Felipe', 23, 'Colombia','Developer Back End'];

//Forma manual Arcaica para acceder a un atributo
//Ejemplo a la profesion de la persona
console.log(`la profesión de la persona es ${persona1[3]}`);

/*
 * vamos a estructurar nuestro arreglo para acceder de una forma mas facil
 */
 const [nombre, edad, pais, profesion] = persona1;

 /*Esta es la manera mas elegante ome*/

 console.log(`Èl nombre del desarrollador es ${nombre}`);

 /*En el caso de que no este defonido una atributo para 
 evitar que salga undefined podemos definir un valor por defecto*/

 const persona2 = ['Yuri Vanessa', 25, , 'Developer Front End'];

 const [nombre2, edad2, pais2 = 'Colombia', profesion2] = persona2;

 console.log(`Èl nombre de la desarrolladora es ${nombre2} y su pais es ${pais2}`);

 /*HASTA AQUI VA EL CODIGO QUEMADO*/

 //Creamos una funcion tipo flecha

console.log("manera de mostrar nombre conf cunion");

 const mostrarNombre = (nombre) => {
 	console.log(nombre);
}
mostrarNombre(nombre);
mostrarNombre(nombre2);

const mostrarInfoPersona = ([nombre, edad , pais = 'Colombia',] = persona) =>{
	console.log(`la persona se llama ${nombre} su edad es de ${edad} y su pais es ${pais}`);   
}

mostrarInfoPersona(persona1);
mostrarInfoPersona(persona2);