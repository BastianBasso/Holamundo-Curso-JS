/**
 * 📝 Apuntes de Eliminación de Elementos en Arrays (JavaScript)
 * Estos son los métodos clave para eliminar elementos, detallando qué hacen y qué valor devuelven.
 */

// -----------------------------------------------------------
// 1. .pop(): Eliminar al Final
// Descripción: Elimina el ÚLTIMO elemento del array.
// Devuelve: El elemento eliminado.
// Modifica el Array Original: SÍ.

const letrasPop = ['a', 'b', 'c', 'd'];

// Ejecución
const elementoEliminadoPop = letrasPop.pop();

console.log("------------------------");
console.log("Método: .pop()");
console.log("Elemento devuelto:", elementoEliminadoPop); // 'd'
console.log("Array restante:", letrasPop); // ['a', 'b', 'c']
console.log("------------------------");


// -----------------------------------------------------------
// 2. .shift(): Eliminar al Comienzo
// Descripción: Elimina el PRIMER elemento del array.
// Devuelve: El elemento eliminado.
// Modifica el Array Original: SÍ.

const letrasShift = ['a', 'b', 'c', 'd'];

// Ejecución
const elementoEliminadoShift = letrasShift.shift();

console.log("------------------------");
console.log("Método: .shift()");
console.log("Elemento devuelto:", elementoEliminadoShift); // 'a'
console.log("Array restante:", letrasShift); // ['b', 'c', 'd']
console.log("------------------------");


// -----------------------------------------------------------
// 3. .splice(): Eliminar en Cualquier Posición
// Descripción: Elimina elementos a partir de un índice dado y una cantidad específica.
// Sintaxis: array.splice(indiceInicio, cantidadAEliminar)
// Devuelve: Un NUEVO ARRAY con los elementos eliminados.
// Modifica el Array Original: SÍ.

const letrasSplice = ['a', 'b', 'c', 'd'];

// Ejecución: Elimina 2 elementos a partir del índice 1 ('b' y 'c')
const elementosEliminadosSplice = letrasSplice.splice(1, 2);

console.log("------------------------");
console.log("Método: .splice(1, 2)");
console.log("Array devuelto (eliminados):", elementosEliminadosSplice); // ['b', 'c']
console.log("Array restante:", letrasSplice); // ['a', 'd']
console.log("------------------------");

// 💡 Tip Extra: Si omites el segundo argumento, elimina todos desde el índice de inicio hasta el final.