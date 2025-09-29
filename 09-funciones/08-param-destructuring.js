// Parámetros por destructuración en funciones JavaScript

// El param destructuring (desestructuración de parámetros) en JavaScript es una técnica que permite extraer valores específicos de objetos o arrays directamente en la definición de los parámetros de una función.

// 1. Acceso tradicional a propiedades de un objeto
function webserver(config) {
    const url = config.url; // Accedemos a la propiedad 'url' usando la notación de punto
    return url;
}
console.log(webserver({ url: 'https://namatanerv.xyz' })); // output: https://namatanerv.xyz

// 2. Destructuración dentro de la función
function webserver2(config) {
    const { url } = config; // Extraemos la propiedad 'url' directamente en una constante
    return url;
}
console.log(webserver2({ url: 'https://namatanerv.xyz' })); // output: https://namatanerv.xyz

// 3. Destructuración directa en los parámetros de la función
function webserver3({ url }) {
    return url; // 'url' ya está disponible como variable local
}
console.log(webserver3({ url: 'https://namatanerv.xyz' })); // output: https://namatanerv.xyz

// Ventaja: La destructuración permite extraer solo las propiedades necesarias, haciendo el código más limpio y fácil de leer.

// 4. Destructuración anidada y valores por defecto
const config02 = {
    url: 'https://holamundo.io',
    direccion: {
        calle: 'hola mundo',
        numero: 80,
    }
};
function webserver4({ url, direccion: { calle } = {} }) {
    // Extraemos 'url' y la propiedad anidada 'calle' de 'direccion'
    console.log(calle); // output: hola mundo
    return url;
}
console.log(webserver4(config02)); // output: https://holamundo.io

// Si 'direccion' no existe, el valor por defecto '{}' evita errores de destructuración.

// 5. Destructuración de arrays en parámetros
const config03 = [
    'https://holamundo.io',
    145,
    80,
];
function webserver5([url, bucket, port]) {
    // Extraemos los valores por posición
    return url;
}
console.log(webserver5(config03)); // output: https://holamundo.io

// 6. Uso de ...rest para agrupar el resto de las propiedades
const config099 = {
    url: 'https://holamundo.io',
    direccion: {
        calle: 'hola mundo',
        numero: 80,
    }
};
function webserver099({ url, ...rest }) {
    // 'url' se extrae y 'rest' contiene el resto de las propiedades del objeto
    console.log(rest); // output: { direccion: { calle: 'hola mundo', numero: 80 } }
    return url;
}
console.log(webserver099(config099)); // output: https://holamundo.io

/*
Resumen:
- La destructuración de parámetros permite extraer propiedades o elementos específicos de objetos y arrays directamente en la definición de la función.
- Hace el código más legible, evita repeticiones y facilita el manejo de datos complejos.
- Puedes usar valores por defecto y el operador ...rest para mayor flexibilidad.
- Es especialmente útil en funciones que reciben configuraciones, opciones o datos*/