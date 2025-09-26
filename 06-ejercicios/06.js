// Crear copias
let obj1 = { id: 1, name: 'chanchito' };

function crearCopia(obj) {
    let copia= {};
    for ( key in obj){
        copia[key]=obj[key];
    }
    return copia;
}

let obj2 = crearCopia(obj1);
console.log({ obj1, obj2 });

