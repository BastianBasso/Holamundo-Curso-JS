function suma(a, b) {
    console.log(arguments); // output: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
}
suma(1, 2, 3, 4);

// Mejor forma de acceder a los parámetros extra de una función:
// El operador ...rest permite capturar todos los argumentos adicionales en un array.
// Es más claro y seguro que usar arguments.

function suma2(a, b, ...rest) {
    console.log(rest); // output: [3, 4, 5, 6]
    // ...rest contiene todos los argumentos extra después de a y b
}
suma2(1, 2, 3, 4, 5, 6);

// ¿Se puede usar ...rest con funciones fat arrow ?
const suma3 = (a, b, ...rest) => {
    console.log(rest); // output: [3, 4, 5, 6]
}
suma3(1, 2, 3, 4, 5, 6);
// Sí, funciona igual que en funciones tradicionales.

// Caso de uso: Detección y registro de mensajes de error
const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg); // output: desc seguido de cada mensaje
    }
}
logMsg('Servidor:', 'Error 1', 'Petición aceptada', 'socket activo');
// output: 
// Servidor: Error 1
// Servidor: Petición aceptada
// Servidor: socket activo

let mensajes = ['Error 1', 'Petición aceptada', 'socket activo'];
logMsg('Cliente móvil', ...mensajes, 'Otro errror!');
// output:
// Cliente móvil Error 1
// Cliente móvil Petición aceptada
// Cliente móvil socket activo
// Cliente móvil Otro errror!

// Resumen y explicación mejorada:
// - El operador ...rest en los parámetros de una función permite capturar todos los argumentos extra en un array.
// - Es más moderno y seguro que usar el objeto arguments, y funciona tanto en funciones tradicionales como en funciones flecha.
// - Muy útil para funciones que reciben un número variable de argumentos, como loggers, sumadores, o procesadores de datos.
// - Puedes combinar ...rest con el spread operator para pasar