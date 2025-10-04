function User() {
    this.name = 'hola Mundo';
    // metodo de instancia
        // El objetivo es que la instancia tenga su propio metodo
    this.logger = function () {
        console.log('loggeando...');
        this.login();
    }
}
// El llamado es viceversa
// puedo llamar desde la funcion constructora al protootipo y del pototipo a la funcion ocnstructora
// 


//Método de prototipo
    // no es necesario definir el metodo de prototipo al inicio del codigo (antes de crear la instancia)
User.prototype.login = function () {
    console.log('iniciando sesión',this.name);
    //this.logger();
}
// manipulando la funcion  constructor con el prototipo
// Prototipo ahor aesta enlazado a el objeto creado antes, el this se ocupa para accedeer a las propiedades del objeto que le antecede


const user1 = new User();
const user2 = new User();

console.log(user1);


user1.logger();//a

console.log(user1.login == user2.login);
// al crear una nuevo objeto con la funcion constructora , las funciones generadas son diferentes, el login de user 1 no es lo mismo que login de user 2

// caso contra producente es cuando hay miles de miles de instancias  y por tanto deveriamos usar los prototipos para optimizar 


console.log(user1);



console.log(User.prototype);
console.log(Object.getPrototypeOf(user1));
// Son lo mismo?
console.log(User.prototype===Object.getPrototypeOf(user1));
