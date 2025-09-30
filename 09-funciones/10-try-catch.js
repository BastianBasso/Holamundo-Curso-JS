// Manejo de errores con try...catch en JavaScript

function sumaTodo(arr) {
    return arr.reduce((acc, el) => acc + el);
}

console.log(sumaTodo([1, 2, 3, 4])); // output: 10

// Si pasamos un objeto que no tiene el método reduce, se produce un error.
// try...catch permite capturar ese error y evitar que la aplicación se detenga.

try {
    console.log(sumaTodo({ prop: 1 })); // output: TypeError: arr.reduce is not a function
} catch (error) {
    console.log(error); // Muestra el error capturado
    // La aplicación sigue funcionando, no se detiene por el error
}

console.log("Mensaje que demuestra que el try catch funciona");
// output: Mensaje que demuestra que el try catch funciona

// Es recomendable envolver el código propenso a fallos en un bloque try...catch.
// Así puedes mostrar mensajes de error amigables al usuario y evitar que la app se caiga.

// Ejemplo de validación y manejo de errores más elegante:

function sumaTodo2(arr) {
    if (!Array.isArray(arr)) {
        // Si el parámetro no es un array, lanzamos un error personalizado
        throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)) {
            // Si algún elemento no es un número válido, lanzamos otro error
            throw new Error(`Elemento ${el} no es número`);
        }
        return acc + el;
    });
}

console.log(sumaTodo2([1, 2, 3, 4])); // output: 10

try {
    // Aquí forzamos un error pasando un array con un NaN y un string
    console.log(sumaTodo2([1, 2, 3, NaN, 'Hola mundo']));
} catch (error) {
    console.log(error.message); // output: Elemento NaN no es número
    // Puedes implementar sistemas de gestión de errores como Sentry aquí
}

console.log("Mensaje que demuestra que el try catch funciona");
// output: Mensaje que demuestra que el try catch funciona

/*
Notas importantes:
- Un "error" es cuando ocurre un problema en tiempo de ejecución (por ejemplo, TypeError).
- Una "excepción" es cuando lanzamos un error manualmente usando throw.
- try...catch permite capturar ambos tipos y manejar el flujo de la aplicación de forma segura.
- Es buena práctica lanzar errores personalizados con throw new Error('mensaje') para facilitar el diagnóstico y la gestión de errores. */