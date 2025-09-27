const usuarios = [
    { edad:17,nombre:'Nico'},
    { edad:13,nombre:'Chanchito'},
    { edad:25,nombre:'Felipe'},
    { edad:32,nombre:'Fernanda'},
];  
// Ver ahora el metodo de map

// map crea un arreglo nuevo en base a la funcion que le pasemos

const lista =usuarios.map((u)=>u.nombre);
console.log(lista);

const lista2 =usuarios.map( u =>`<li>${u.nombre}</li>`);
console.log(lista2);

const html = `<ol>${lista2.join('')}</ol>`;
console.log(html);


// Ahora Otro uso
// Creear nuevos objetos a partir de otros previos

const mapped = usuarios.map((u)=>{
    return{
        ...u,
        mayor: u.edad>17,
    }
});
console.log(mapped);
// agrega un atributo nuevo a cada objeto



// diferencia de azucar sintactico
const mapped2 = usuarios.map((u)=>({
        ...u,
        mayor: u.edad>17,
}));
console.log(mapped2);


// Ejemplo de uso 
const lista5 = usuarios
    .filter(u=> u.edad>17)
    .map(u =>`<li>${u.nombre}</li>`);
const html2 = `<ol>${lista5.join('')}</ol>`;
console.log(html2);
