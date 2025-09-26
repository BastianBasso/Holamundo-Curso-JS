// Existen los template strings
// Son mejores que los caracteres de escape para crear y formatear textos

// ¿Qué son?
// Los template strings (o plantillas literales) se escriben entre backticks (`)
// Permiten incluir variables y expresiones fácilmente usando ${...}
// Soportan saltos de línea y texto multilínea sin necesidad de secuencias de escape

const nombre = "Nicolas";
const apellido = "Schurmann";
const nombreCompleto = `${nombre} ${apellido}`; // Interpolación de variables

// Ejemplo de función usando template string
function plantilla(nombre) {
    return `Hola ${nombre}!
Bienvenidos a "Ultimate JavaScript" :)
Cariños Nico.`;
}

console.log(plantilla('Chanchito feliz'));

// Ventajas:
// - Permiten interpolar variables y expresiones directamente en el texto
// - Facilitan la escritura de textos multilínea
// - Mejoran la legibilidad y el mantenimiento del código

// Ejemplo de expresión dentro de template string
const edad = 30;
console.log(`El próximo año tendrás ${edad + 1} años.`);

// Resumen:
// Usa template strings con backticks (`) para crear textos dinámicos y