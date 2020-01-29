/**
 * Primer letra del nombre de una clase en MAYUSCULA
 *
 */
class Usuario {
    /**
     * Creaciòn del Constructor
     * El constructor se ejecuta cada vez que se declare
     * Una nueva instancia de la clase
     * new Usuario()
     * Declaramos atributos de la clase
     */
    constructor(username, password, profession){
        //Propiedades
        this.username = username,
        this.password = password,
        this.profession = profession,
        this.activo = true
    }
    /**
     * Declaraciòn de metodos o funciones de la clase
     */
    getUsername(username){
        alert(`Hola como estas bienvenido ${username}`);    
    }
    solicitarProfesion(profesion){
        return "tu profesiòn es "+profesion+"<br>";
    }
    mostrarInfo(){
        return `
            Username: ${this.username}<br />
            Profesion: ${this.profession}<br />
        `;
    }
}

const usuario1 = new Usuario('frodriguez','solati123','Developer Back End');
usuario1.getUsername(usuario1.username);
document.write(`Este es tu username: ${usuario1.username} <br>`);
document.write(usuario1.solicitarProfesion(usuario1.profession));
document.write(usuario1.mostrarInfo());
/*document.write(usuario1.password);
document.write(usuario1.activo);*/

const usuario2 = new Usuario('yvcastiblanco5','lunayflorecita', 'Developer Front End');
usuario1.getUsername(usuario2.username);
document.write(`Este es tu username: ${usuario2.username} <br>`);
document.write(usuario2.solicitarProfesion(usuario2.profession));
/**
 * Herencia de la clase Usuario
 */
 class Persona extends Usuario{

     constructor(username, password, profession, sexo) {
         super(username,password,profession);
         this.sexo = sexo;
     }
     mostrarInfo() {
         return `
            Username: ${this.username}<br />
            Profesion: ${this.profession}<br />
            Profesion: ${this.sexo}<br />
            <hr />
        `;
     }
 }
const usuario3 = new Persona('rcalderon', 'solati123', 'Enginner Sopport', 'Femenino');
document.write(usuario3.mostrarInfo());



