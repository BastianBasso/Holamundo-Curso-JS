// Introducción a la Programación Orientada a Objetos (POO) en JavaScript
// La POO es un paradigma que organiza el código en torno a objetos, facilitando la reutilización y el mantenimiento.
// En JavaScript, la POO se implementa principalmente mediante prototipos, no clases tradicionales como en otros lenguajes.


// Concepto de Prototipos
// Cada objeto en JavaScript tiene un prototipo, que es otro objeto del cual hereda propiedades y métodos.
// Esto permite compartir funcionalidades entre objetos de manera eficiente.

// // Ejemplo de un constructor y su prototipo:
// function User(name) {
//   this.name = name; // Propiedad propia de cada instancia
//   this.instancia = function () {}; // Método propio de cada instancia
// }

// // Método compartido por todas las instancias de User, gracias al prototipo
// User.prototype.login = function () {
//   console.log('Hola mundo!');
// };


// Class es solo azucar sintactica en el lenguaje JS


// Usando la palabra reservada de class
class User {
    constructor(name) {
        this.name = name;
        this.instancia = function(){};
    }
    activo=true;

    logout = () => {
        console.log('Logout');
        
    }// esto no save js si es intancia o no , asi que se lo asigna a User  en vez de a us prototipof


    login () {
        console.log("Hola mundo");
    }
    // Usando esta sintacis , los metodos se agregan al prototipo de User

    // Sin embargo , si hago todo dentro del constructor , entonces sera porpia de el User y no de su prototipo

}

const u = new User('Bastián'); // se deve usar si o si usar el new para generar el objeto 

