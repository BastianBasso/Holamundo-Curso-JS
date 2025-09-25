//  Atajos de todo de js


let obj={};
// se crea objeto 1 de muestra


// let objeto = {};
// undefined
// objeto.constructor
//     > function Object()
// Funcion constructora que nos permite crear objetos


function Usuario(){
    this.name="äsdadasd";
}
let user1 = new Usuario();
console.log(user1.constructor);
// este atajo me permite identificar el tipo de objeto el .constructor , mejor qu typeof que solo me diria que es objeto