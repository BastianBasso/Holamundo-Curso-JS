// join() es un método de los arrays que une todos los elementos en un solo string.
// Puedes especificar el separador que se usará entre los elementos.

// Ejemplo básico:
let arr1 = ['Nicolas', 'Chanchito', 'Felipe'];
let mensaje = arr1.join(', '); // "Nicolas, Chanchito, Felipe"
console.log(mensaje);
// join() es útil para mostrar listas o convertir arrays en texto.



// También puedes combinarlo con split() para manipular strings:
let saludo = "Hola mundo! desde NZ";
let dividido = saludo.split(" "); // ["Hola", "mundo!", "desde", "NZ"]
console.log(dividido.join('-'));  // "Hola-mundo!-desde-NZ"

// Resumen:
// - join(separador): une los elementos del array en un string usando el separador.
// - Si no se especifica separador, usa una coma por defecto.
// split(' ') util para separar en un array