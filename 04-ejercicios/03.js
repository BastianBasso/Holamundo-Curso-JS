// Construir una funcion que nos permita obtener un elemento por su indice

function getbyInx(array, pos){
  if (pos<0 || (array.length - 1 ) < pos ) {
    return false;
  }
    return array[pos]; 
}

let resultado = getbyInx([1,2],-1);
console.log(resultado);
