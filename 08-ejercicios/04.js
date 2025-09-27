const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];
  
function cuantosPremium(usrs) { 
    return (usrs.filter((usrs)=>  usrs.plan === 'premium' )).length;
}

function cuantosPremium2(usrs) { 
    return (usrs.reduce((acc, el)=>{
        if (el.plan !== 'free' ){
            return 1 + acc;
        }
        return acc;
    },0) );
}



function cuantosMayores(usrs) { 
    return (usrs.filter((usrs)=>  usrs.edad >= 17 )).length;
}

console.log(cuantosPremium(usuarios));
console.log(cuantosPremium2(usuarios));
console.log(cuantosMayores(usuarios));

