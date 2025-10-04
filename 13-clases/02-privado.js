// function User(a) {
//   let name = a;// name ya es privada
//   this.getName = function() { return name;}
// }


class User {
    #name;
    constructor(name){
        this.#name = name;
    }

    // como acceder a el valor privado?
    //entrada y salida
    getName () {
        return this.#name;
    }
    changeName (newname) {
        this.#name = newname;
    }

    #logger() {
        // este es un metodo privado, se ve con un smbolo de numeral
    }

}




let u= new User('Patito');

console.log(u);
