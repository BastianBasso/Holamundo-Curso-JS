// Buscar elemetnos que son de tipo de referencia

const usuarios =[
    { id : 1, name:'Chanchito'},
    { id : 1, name:'Felipe'},
    { id : 2, name:'Felix'},
];

// para acceder a elemtnos teniamos qeue hacer un usuarios.id     o un`.`propiedad

const resultado = usuarios.indexOf({ id : 2, name:'Felix'});
console.log(resultado);

// Porque nos devuelve -1?
// objeto esta guardado por referncia y este dato es inchekeable de esa forma estatica

// para encontrar lo selementos se utilizara el lemento de busqueda .find();
const resultado2 = usuarios.find(function(usuarios){
    return usuarios.id===1 ; // este tipo de funcion tine que retornr true o false
});
// tira el primer elemento que encuentra

console.log(resultado2);


// otra forma mas rapida de hacer esto es con una arrow function 

// con la fat arrow function
const resultado3 = usuarios.find((usuarios)=> usuarios.id===1);


console.log(resultado3);



// ahora para buscar solo el indice en donde se encuentra el elemnto

const resultado5 = usuarios.findIndex((usuarios)=> usuarios.id===1);
console.log(resultado5);
