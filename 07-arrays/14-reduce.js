const numeros = [1,2,3,4];
const suma = numeros.reduce((acc, el) => {
    return acc + el;
}, 0);
console.log(suma);


// des anidar un array 
const anidado = [[1, 2], 3, [4, 5]];
const plano = anidado
    .reduce((acc, el) => acc.concat(el), []);// concat será el numero que se evalua
console.log(plano);



/*
    Caso de muchos elementos (Ridiculamente grandes):

Este ejemplo es útil cuando tienes miles de elementos porque transforma un array de objetos en un objeto indexado por nombre.
Así, puedes acceder a cada usuario por su nombre de forma rápida y eficiente, sin recorrer todo el array.
*/
const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, fnombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el, // esto muestra el atributo nombre y su valor
}), {});

console.log(indexado);
// Resultado:
// {
//   Nico: { edad: 17, nombre: 'Nico' },
//   Chanchito: { edad: 13, nombre: 'Chanchito' },
//   Felipe: { edad: 25, nombre: 'Felipe' },
//   Fernanda: { edad: 32, nombre: 'Fernanda' }
// }
