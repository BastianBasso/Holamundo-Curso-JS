// construir usuarios con Función constructor

function Usuario(name) {
    this.name= name;
    // porque no era this.name: name , en esta funcion constructor ??
    this.id=  Math.random();
}

let user = new Usuario('Felipe');
let user2 = new Usuario('Chanchito');

console.log(user, user2);


// Por esto ::
// this.name = name es la sintaxis de asignación en JavaScript, usada para asignar un valor a una propiedad de un objeto.
// this.name: name es la sintaxis de los objetos literales, pero no funciona dentro de una función constructora.