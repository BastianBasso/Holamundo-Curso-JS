// Exsiten 2 forama de buscar un valor
//  Buscar un valor que es primitivo
//  Buscar un valor por referencia 
 


const letras = ['a', 'b', 1, 'c', 'd', 1];

// indexOf(valor)
// Busca el primer índice donde aparece el valor en el array.
// Si el valor no existe, retorna -1.
console.log(letras.indexOf('c')); // 3
console.log(letras.indexOf(1));   // 2 devuelve el indice del primer 1 que encuentra

// lastIndexOf(valor)
// Busca el último índice donde aparece el valor en el array. 
console.log(letras.lastIndexOf(1)); // 5

// includes(valor)
// Verifica si el valor existe en el array (devuelve true o false).
console.log(letras.includes('d')); // true

// Uso típico para saber si un elemento está en el array:
// Esviejo y es feo
if (letras.indexOf(1) !== -1) {
    // El elemento 1 está presente en el array
}


console.log(letras);
console.log(letras.indexOf(1,3)); // segundo argumentos es apra iniciar la busqueda despues de ese dato



// Resumen de métodos:
// - indexOf(valor): primer índice del valor.
// - lastIndexOf(valor): último índice del valor.
// - includes(valor): verifica si el valor existe en