const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];
  
  const users = [
    { age: 22, name: 'Michael', membership: 'premium' },
    { age: 27, name: 'Kevin', membership: 'free' },
    { age: 29, name: 'Happy pig', membership: 'free' },
];

// Unificar las estructuras de usuarios y user
// fusionar los array
// ordenar por edad
// crear plantilla HTML:
// <li>Nombre: name, Edad: age</li>
// imprimir la lista en consola

// Como cambiar el nombre de los atributos en users

const usuariosRenomb = users.map((usuario)=>{
    const {membership,name,age}=usuario;
    return{
        edad:age,
        nombre:name,
        plan:membership,
    };
});
//console.log(usuariosRenomb);
let fusion = usuarios.concat(usuariosRenomb);
let orden_age = fusion.sort((a,b)=>{
    let a_edad = a.edad;
    let b_edad = b.edad; 

    if (a_edad===b_edad) {
        return 0;
    }
    return (a_edad > b_edad ?  1 : -1);
});


let html_b= '';
for (const element of orden_age) {
    html_b= `\t<li style="color:gray"> Nombre:${element.nombre}, Edad ${element.edad}</li>\n`+html_b;
}



const html=`<ul>
${html_b}</ul>
`;

//console.log(html_b);

console.log(html);

document.body.innerHTML += html;


