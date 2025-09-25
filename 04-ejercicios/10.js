// crear u arreglo de 1 a n con longitud N


let longitud = 100;

function crearArray(n){
    let array = [];

    for (let i = 0; i < n; i++) {
        //const element = array[i];
        array[i]=i+1;
    }
    return array;
}

let resultado = crearArray(longitud);
console.log(resultado);