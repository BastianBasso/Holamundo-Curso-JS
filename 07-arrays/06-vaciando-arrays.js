// Vaciar un array significa eliminar todos sus elementos, dejándolo como un array vacío []

// Método 1: Asignar length = 0
let arr = [1, 2];
arr.length = 0; // Elimina todos los elementos
console.log(arr); // []

// Método 2: Reasignar el array (no afecta referencias)
let arr2 = [1, 2];
arr2 = []; // Solo funciona si no hay otras referencias al mismo array

// Método 3: Usar splice para eliminar todos los elementos
let arr3 = [1, 2];
arr3.splice(0, arr3.length); // Elimina todos los elementos
console.log(arr3); // []

// Nota importante:
// Si el array tiene otras referencias (por ejemplo, arr2 = arr), solo los métodos que modifican el array original (length o splice) vacían el array para todas las referencias.
// Reasignar con arr = [] solo afecta la variable arr, no otras referencias.

// Resumen:
// - arr.length = 0;  // Vacía el array y afecta todas las referencias
// - arr.splice(0, arr.length); // Vacía el array y afecta todas las referencias
// - arr = []; // Solo vacía la variable