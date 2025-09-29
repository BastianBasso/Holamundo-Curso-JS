// Parámetros en funciones: buenas prácticas y mejoras modernas

/*
Supongamos que queremos construir un objeto de configuración para una API,
por ejemplo, con propiedades como url, bucket y port:
    {
        url: 'https://holamundo.io',
        bucket: 'amazon S3',
        port: 80
    }
Podemos crear funciones para configurar estos valores y facilitar el uso de la API.
*/

// Ejemplo clásico: asignar valor por defecto usando ||
function configurarAPI(url) {
    const defaultURL = url || 'https://holamundo.io';
    return `${defaultURL}`;
}
console.log(configurarAPI()); // output: https://holamundo.io
console.log(configurarAPI('https://chaomundo.io')); // output: https://chaomundo.io

console.log("\n");

// Forma moderna: parámetros por defecto en la definición de la función
function configurarAPI3(url = 'https://holamundo.io') {
    return `${url}`;
}
console.log(configurarAPI3()); // output: https://holamundo.io
console.log(configurarAPI3('https://chaomundo.io')); // output: https://chaomundo.io

console.log("\n");

// Usando objetos y destructuración para mayor flexibilidad
const config = {
    url: 'https://holamundo.io',
};

function configurarAPI2({ url }) {
    return `${url}`;
}
console.log(configurarAPI2(config)); // output: https://holamundo.io
// Si llamas configurarAPI2() sin argumento, da error porque no existe la propiedad url en undefined

console.log('\n');

// Solución: valor por defecto para el parámetro destructurado
function configurarAPI4({ url } = { url: 'default' }) {
    return `${url}`;
}
console.log(configurarAPI4()); // output: default

console.log("\n");

// Parámetros múltiples con valores por defecto
// se usan parametros multiples , porque asi no tirar error en caso de llamar a la funcion 
function configurarAPI5(url, bucket = 145, port = 80) {
    return `${url}/${bucket}:${port}`;
}
console.log(configurarAPI5('https://holamundo.io')); // output: https://holamundo.io/145:80

/*
Resumen y buenas prácticas:
- Usa parámetros por defecto en la definición de la función para mayor claridad y seguridad.
- La destructuración de objetos en los parámetros permite extraer solo las propiedades necesarias.
- Puedes combinar destructuración y valores por defecto para evitar errores si no se pasan argumentos.
- Es útil para configurar APIs, donde puedes tener valores predeterminados y permitir personalización.
- Siempre documenta qué parámetros acepta tu función y cuáles son opcionales.*/