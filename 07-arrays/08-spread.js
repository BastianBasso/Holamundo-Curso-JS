// spread operator , sirve para combinar arrays mas facil 

// El operador spread (...) permite "expandir" los elementos de un array o un objeto.
// Es muy útil para combinar, copiar o agregar elementos de manera sencilla.

// Ejemplo: combinar arrays
let arr1 = [1, 2];
let arr2 = [5, 6];
let arr3 = [0, ...arr1, 3, 4, ...arr2, 7, 8];
// Resultado: [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Copiar un array con spread
let arr4 = [...arr3]; // arr4 es una copia superficial de arr3

// También puedes copiar usando slice()
//let arr4 = arr3.slice(); // arr4 es una copia superficial de arr3

// Modificar el array original no afecta la copia
arr3.pop();
console.log(arr3, arr4); // arr3 tiene un elemento menos, arr4 sigue igual

// Resumen:
// - ...array: expande los elementos del array donde lo uses (en otro array, función, objeto, etc).
// - Muy útil para combinar, copiar y agregar elementos sin modificar el