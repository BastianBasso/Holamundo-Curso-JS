// Secuencias de escape dentro de los strings
// Permiten escribir caracteres especiales como comillas simples, dobles comillas, saltos de línea, tabulaciones, etc.
// Se usan el carácter backslash (\) seguido de una letra o símbolo especial.

// Ejemplo de uso:
const saludo = "Hola \\mundo!\nbienvenidos a\t\"ultimate javascript\" :)";

// Principales secuencias de escape:
console.log(saludo);
/**
 * \n  nueva línea
 * \t  tabulación
 * \'  comilla simple
 * \"  comilla doble
 * \\  backslash (barra invertida)
 */

// Descripción general:
// Las secuencias de escape permiten incluir en los strings caracteres que de otro modo serían difíciles o imposibles de escribir directamente.
// Por ejemplo, puedes poner comillas dentro de un string sin terminarlo, saltos de línea, tabulaciones, o el propio símbolo de backslash.
// Son muy útiles para formatear texto, mostrar mensajes en varifas líneas, o trabajar con datos que