// El objeto arguments es un iterable disponible dentro de todas las funciones tradicionales (no flecha).
// Contiene todos los argumentos pasados a la función, aunque no estén definidos en los parámetros.

// Ejemplo moderno: convertir arguments en array y usar reduce
function suma(a, b) {
    // Array.from convierte arguments en un array real
    return Array.from(arguments)
        .reduce((acc, el) => acc + el, 0);
}
console.log(suma(1, 2, 3, 4)); // 10

// Ejemplo clásico: iterar arguments con for...of
function sumaVieja(a, b) {
    let total = 0;
    for (let valor of arguments) {
        total += valor;
    }
    return total;
}
console.log(sumaVieja(1, 2, 3, 4)); // 10

// Precaución: arguments contiene todos los valores pasados, pero los parámetros solo toman los primeros.
// Si usas más argumentos de los definidos, los parámetros extra quedan fuera.
function suma2(a, b) {
    console.log(arguments); // Muestra todos los argumentos
    return a + b; // Solo suma los dos primeros
}
console.log(suma2(1, 2, 3, 4, 5, 6)); // 3 (los demás se ignoran)

// Resumen:
// - arguments permite acceder a todos los valores pasados a la función.
// - Puedes convertirlo en array con Array.from() para usar métodos modernos.
// - Si quieres sumar todos los argumentos, usa reduce sobre arguments.
// - Los parámetros definidos solo toman los primeros valores, los