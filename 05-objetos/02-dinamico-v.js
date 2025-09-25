// Situación: Objeto 'user' declarado con 'const'
// A pesar de que 'user' es una constante, sus propiedades pueden ser modificadas.

const user = { id: 1 };

// ¿Por qué podemos agregar propiedades si 'user' es una constante?
/*
La palabra clave 'const' NO hace que el objeto sea inmutable.
Lo que 'const' garantiza es que la REFERENCIA (la dirección de memoria)
del objeto NO PUEDE ser reasignada a otro objeto.
Es decir, no puedes hacer esto:
user = { id: 2 }; // ¡Error! No se puede reasignar una constante.

Sin embargo, el CONTENIDO del objeto al que apunta esa referencia
SÍ puede ser modificado. Puedes agregar, cambiar o eliminar sus propiedades.
*/

user.name = "Namata"; // Agregando una nueva propiedad 'name'
user.direccion = "Ciudad Gotica"; // Agregando la propiedad 'direccion'
user.guardar = function () { // Agregando un método (una función)
  console.log('Guardando', user.name);
};

user.guardar(); // Llama al método 'guardar'
// Output: Guardando Namata

// También podemos eliminar propiedades del objeto dinámicamente.
delete user.direccion;
delete user.guardar;

console.log(user);
// Output: { id: 1, name: 'Namata' }
// Las propiedades 'direccion' y 'guardar' han sido eliminadas.

// --- Controlando la Mutabilidad de los Objetos ---

// Ahora, ¿cómo hacemos que el objeto no se pueda modificar en absoluto?
// Usamos el método 'Object.freeze()'. Este congela el objeto.
const user1 = Object.freeze({ id: 1 });

/*
'Object.freeze()' hace que el objeto sea COMPLETAMENTE inmutable.
Esto significa que:
1. No se pueden agregar nuevas propiedades.
2. No se pueden modificar las propiedades existentes.
3. No se pueden eliminar propiedades.
*/
user1.name = 'Nico'; // Esto no tiene efecto, la propiedad no se agrega.
user1.id = 2;       // Esto no tiene efecto, la propiedad 'id' no cambia su valor.
console.log(user1);
// Output: { id: 1 }
// 'name' nunca se agregó y 'id' mantuvo su valor original.

// Ahora, ¿qué pasa si queremos que NO se agreguen nuevas propiedades, pero sí
// podamos modificar las que ya están definidas?
// Usamos el método 'Object.seal()'. Este sella el objeto.
const user2 = Object.seal({ id: 1, name: 'Ballena' });

/*
'Object.seal()' hace que el objeto sea "sellado". Esto significa que:
1. NO se pueden agregar nuevas propiedades.
2. SÍ se pueden modificar las propiedades existentes.
3. NO se pueden eliminar propiedades.
*/
user2.id = 2; // ✅ MODIFICACIÓN VÁLIDA. 'id' ahora es 2.
user2.name = 'Ballena Azul'; // ✅ MODIFICACIÓN VÁLIDA. 'name' cambia.
user2.age = 30; // ❌ ESTO NO TIENE EFECTO. No se puede agregar una nueva propiedad.
delete user2.id; // ❌ ESTO NO TIENE EFECTO. No se puede eliminar una propiedad.

console.log(user2);
// Output: { id: 2, name: 'Ballena Azul' }
// 'id' y 'name' fueron modificadas exitosamente, pero 'age' no se agregó.