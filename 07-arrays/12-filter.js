// Uso de filter para buscar elementos en arrays de objetos

const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

// Buscar usuarios mayores de 17 años
const mayores = usuarios.filter(u => u.edad > 17);
console.log(mayores); // [{ edad: 25, nombre: 'Felipe' }, { edad: 32, nombre: 'Fernanda' }]

// Buscar usuarios menores de 17 años
const mayores2 = usuarios.filter(u => u.edad < 17);
console.log(mayores2); // [{ edad: 13, nombre: 'Chanchito' }]

// ¿Por qué usar filter?
// - Permite obtener un nuevo array solo con los elementos que cumplen una condición.
// - Es útil para filtrar datos, buscar coincidencias o crear listas personalizadas.
// - No modifica el array original, solo