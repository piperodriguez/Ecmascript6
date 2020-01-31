console.log("PARAMETROS SPREAD");

const mostrarDatos = (...data) => {
    console.log(data);
    const [nombre, edad, email, pais] = data;
    console.log(nombre);
    
    
}

const arrData = ['Juan Felipe', 23, 'juanfeliperv@hotmail.com', 'Colombia'];

mostrarDatos(...arrData);

const arrData2 = ['Yuri Vanessa', 25, 'yvcastiblanco@hotmail.com', 'Colombia'];

mostrarDatos(...arrData2);