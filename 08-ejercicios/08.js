const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];


/*
Obtner los usuarios pago
Ordenar de mayor a menor edad
Devolver el nombre del usuario
Crear una plantilla html
Imprimirla en la consola

<ul>
<li>Felipe</li>
<li>Nico</li>
</ul>

*/


let res = usuarios.filter((u)=>{
    return u.plan != 'free';
});
// const mayores = usuarios.filter(u => u.edad > 17);
let res2= (res.sort((a,b) => b.edad -a.edad ));
let res3 = res2.map((u)=> u.nombre);
let html = (`<li>${res3.join('</li>\n<li>')}</li>`);
console.log(`<ul>\n${html}\n</ul>`);
// caso real de aplicacion





