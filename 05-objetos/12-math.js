// Existen objetos que vienen definidos dentro de JS para resolver problemas matemáticos.
// El objeto Math proporciona funciones y constantes matemáticas útiles.

// Ejemplos de uso de Math:
console.log(Math.sqrt(32));      // Raíz cuadrada de 32
console.log(Math.sin(200));      // Seno de 200 (en radianes)
console.log(Math.abs(-50));      // Valor absoluto de -50

// Puedes combinar métodos de Math para cálculos más complejos:
console.log((Number(Math.sqrt(32).toFixed(3))) ** 2); // Raíz cuadrada, redondeo y potencia

// Propiedades útiles de Math:
Math.PI;        // Valor de pi (~3.14159)
Math.E;         // Número de Euler (~2.71828)
Math.SQRT2;     // Raíz cuadrada de 2 (~1.41421)

// Métodos útiles de Math:
Math.pow(x, y);     // x elevado a la potencia y
Math.max(a, b, c);  // Máximo de los valores
Math.min(a, b, c);  // Mínimo de los valores
Math.round(x);      // Redondea al entero más cercano
Math.floor(x);      // Redondea hacia abajo
Math.ceil(x);       // Redondea hacia arriba

// Generar números aleatorios:
// Math.random() genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido)
let aleatorio = Math.random(); // Ejemplo: 0.573829

// Para obtener un número entero aleatorio entre 0 y 9:
let enteroAleatorio = Math.floor(Math.random() * 10); // 0, 1, ..., 9

// Para obtener un número entero aleatorio entre min y max (incluido):
function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomEntre(5, 15)); // Número aleatorio entre 5 y 15

// Resumen:
// El objeto Math te permite realizar cálculos matemáticos y generar números aleatorios fácilmente.
// No se instancia, se usa directamente como