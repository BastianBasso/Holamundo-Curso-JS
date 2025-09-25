// situacion de valor constante de objeto

const user ={id:1};

user.name= "Namata";
user.direccion ="Ciudad Gotica";
user.guardar = function () {
    console.log('Guardando', user.name);
}

/*
Porque se pueden agregar variables y funciones siendo que es constante todo el objeto?
    R: no es constante el objeto, es constante solo el atributo de id, para el resto del objeto, le puedo agregar mas variables y funciones 
*/

user.guardar();


// se peude tambien eliminar algunas propiedades del objeto 
delete user.direccion;
delete user.guardar;

console.log(user);


// aHora: como hacer que el objeto no se pueda modificar? 
const user1 = Object.freeze({id:1});
// No se le va  apoder cambiar sus propiedades ni se le podra cambiar los valores
user1.name = 'Nico'; // ni agregar
user1.id = 2; // ni se le peude cambiar los valores
console.log(user1);
// no se esta mostrando el objeto name porque no se puede agregar 



// Ahora: si quiero que no se agregen propiedades pero que se puedan modificar las que definí
// uso seal 
const user2 = Object.seal({id:1});
user2.name = 'Ballena'; // no me lo agarra
user2.id = 2; // modificacion valida
console.log(user2);
