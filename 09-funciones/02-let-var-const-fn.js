// Hoisting (izado de bandera) en JavaScript

// El hoisting es el comportamiento por el cual las declaraciones de variables (var) y funciones
// se "elevan" al inicio de su ámbito antes de ejecutar el código.

// Ejemplo:
console.log(saludo); // Muestra la función (por hoisting)
console.log(vieja);  // undefined (var se declara pero no se inicializa aún)
// console.log(hola); // Error: Cannot access 'hola' before initialization
// console.log(chao); // Error: Cannot access 'chao' before initialization

function saludo() {} // Las funciones declaradas se elevan y pueden usarse antes de su definición

let hola = 'hola';   // let y const NO se elevan con valor, solo se reservan (zona muerta temporal)
const chao = 'chao';
var vieja = 'ya no debes usar esto'; // var se eleva, pero su valor es undefined hasta la asignación

// Antes de ES6 (ECMAScript 2015), solo existía var para declarar variables.
// Ahora se recomienda usar let y const, ya que NO se elevan con valor y evitan errores de hoisting.

// window es el objeto global en navegadores. Las variables declaradas con var y las funciones
// declaradas pasan a ser propiedades de window.
console.log(window);

// Resumen de hoisting:
// ten cuidado creando funcione sutilizando function
// - Las funciones declaradas y var se elevan al inicio del archivo/ámbito.
// - let y const NO se elevan con valor, solo se reservan (no están disponibles antes de su declaración).
// - Usar var puede causar problemas de ambigüedad y errores, por eso se recomienda let/const.
// - El hoisting puede causar errores difíciles de detectar si nombras mal una función