/*
Factory functions
 crean obetos de manera sencilla y no repetitiva
*/

/*
let user = {
    id: 70,
    email:"namatanerv@gamil.com",
    name: "Namata",
    activo: true,
    recuperarClave: function(){
        console.log('recuperando clave...');
    },
};

let user1 = {
    id: 71,
    email:"bstbasso@gamil.com",
    name: "Bastián",
    activo: false,
    recuperarClave: function(){
        console.log('recuperando clave...');
    },
};
*/
// como se puede apreciar , si queiro crear mas de 10 usuarios tendria que hacer esto 10 veces, osea codigo repetitivo.


// tira todo a camell case
function crearUsuario(name, email){
    return {
        id: 70,
        email: email,
        // o de forma mas corta
        name,
        //equivalente a -> name: name,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave...');
        },
    };    
}

let user1 = crearUsuario("Nicolas", "nico@holamundo.io");
let user2 = crearUsuario("Namata", "namata@holamundo.io");

console.log(user1);
console.log(user2);
