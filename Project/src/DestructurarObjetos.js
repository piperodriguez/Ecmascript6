/**
 * Destructurar Objetos es sumamente Necesario Aprenderlo
 * Ya que muchos frameworks lo requieren
 */

 //CREACION DE UN OBJETO
 const user = {
     username: 'frodriguez',
     password: 'solati123',
     profession: 'Developer Back End',
     age: 23
     //country: "Colombia"
 }

 //FORMA ARCAICA DE OBTENER ATRIBUTO DE UN OBJETO

 console.log(user.username);
 
 //DESTRUCTURAMOS EL OBJETO

 const {username, password, country="No identificado"} = user;

 console.log(`1) Llamando propiedad del objeto destructurado USER`);

 console.log(username);
 console.log(password);
 
 
 //Si se trata de acceder a una propiedad del objeto que no existe se le puede dar un valor por defecto

 console.log(country);

 //Ahora ejecutar cod mediane una funcion

 const getUsuario = ( {username, password, sexo = 'Masculino'} ) => {
    alert(`El usuario que quiere ingresar tiene los siguientes 
    datos username : ${username} y Password: ${password} ,Sexo: ${sexo}`);
 }

getUsuario(user);
 