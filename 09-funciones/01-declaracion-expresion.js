// Diferencias entre declaración de función y expresión de función

console.log(summa); // Function declaration: muestra la función (por hoisting)
console.log(resta); // Function expression: tira error (no está definida aún)
// Esto es el hoisting: las declaraciones de función se "elevan" al inicio del código,
// mientras que las expresiones NO.

// Declaración de función (Function declaration)
// Se define con la palabra 'function' y un nombre.
// Se puede llamar antes de ser definida por el hoisting.
function summa() {
    console.log('Sumando');
}

// Expresión de función (Function expression)
// Se asigna a una variable. Puede ser anónima o nombrada.
// No se puede llamar antes de ser definida.
let resta = function () { // función anónima
    console.log('Restando');
}

let multiplicacion = function multi() { // función nombrada en expresión
    console.log('Multiplicando');
}

// Funciones flecha (Fat Arrow functions)
// Siempre son funciones anónimas y se asignan a una variable.
const divide = () => {
    console.log('Dividiendo');
}

// Resumen de diferencias:
// - Declaración de función: tiene hoisting, se puede llamar antes de su definición.
// - Expresión de función: NO tiene hoisting, solo se puede llamar después de ser definida.
// - Arrow function: siempre anónima, también es una expresión.

// Ejemplo de error por hoisting:
console.log(resta); // Error: Cannot access 'resta'