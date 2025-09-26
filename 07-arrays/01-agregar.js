const letras = ['a', 'b'];

// Agregar elementos al final del array
letras.push('c', 'd'); // ['a', 'b', 'c', 'd']

// Agregar elementos al comienzo del array
letras.unshift('y', 'z'); // ['y', 'z', 'a', 'b', 'c', 'd']

// Agregar elementos en una posición específica usando splice
// Sintaxis: array.splice(indice, cantidadAEliminar, elem1, elem2, ...)
// En este ejemplo: letras.splice(3, 0, 1, 2);
// - 3: índice donde se insertan los nuevos elementos
// - 0: no elimina ningún elemento
// - 1, 2: elementos a insertar
// Resultado: ['y', 'z', 'a', 1, 2, 'b', 'c', 'd']
letras.splice(3, 0, 1, 2);

console.log(letras);

// Resumen de métodos:
// - push(...): agrega elementos al final del array.
// - unshift(...): agrega elementos al inicio del array.
// - splice(indice, cantidadAEliminar, ...elementos): agrega, elimina o reemplaza elementos en cualquier posición del