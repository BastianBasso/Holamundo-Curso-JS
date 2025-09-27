// Para ver si nuesto array cumple con una carcteristica
// o varios cumplen con x caracteristica

//      .every()
//      .some()

let usuario= [
    {id:1,activo:true},
    {id:2,activo:false},
    {id:3,activo:false},
];

let todosActivos = usuario.every(u => {
    console.log('Todos activos', u.id)
    return u.activo;
} );
// Esto se va a aejecutar hasta encontrar el valor de falso 


console.log(todosActivos);
//Porque ocurre esto? ::
// Todos activos 1 11-every-some.js:11:13
// Todos activos 2 11-every-some.js:11:13
// false


let algunoActivo = usuario.some(u => {
    console.log('Todos activos', u.id)
    return u.activo;
} );
// se ejecuta asta encontrar un valor de true
console.log(algunoActivo);
