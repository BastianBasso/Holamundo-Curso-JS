// Combinar arrays con .concat()
// El método concat() une dos o más arrays y retorna un nuevo array combinado.
let arr1 = [1, 2, { name: "chanchito" }];
let arr2 = [3, 4];
let combinados = arr1.concat(arr2);
// Resultado: [1, 2, { name: "chanchito" }, 3, 4]

// Copiar o dividir arrays con .slice()
// El método slice() retorna una copia superficial de una parte del array.
// Si no se pasan argumentos, copia todo el array.
let divididos = combinados.slice(); // Copia todo el array       

// Puedes copiar solo una parte del array usando slice(inicio, fin)
// let divididos = combinados.slice(1, 3); // Copia desde índice 1 hasta 3 (sin incluir 3)
// let divididos = combinados.slice(1);    // Copia desde índice 1 hasta el final

console.log(divididos);

// Resumen de métodos:
// - concat(array): combina arrays y retorna uno nuevo.
// - slice(inicio, fin): copia una parte del array y retorna uno nuevo.
// - slice(): copia todo el