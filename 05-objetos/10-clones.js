// como clonar objetos sin que 2 variables apunten al mismo objeto(?)
let punto ={
    x:10,
    y:15,
};

let cmara ={
    x1:100,
    x2:150,
};


// asignar propiedades a la derecha en objetos de la izq

// asigna propiedades así   punto, <-- cmara
// de lo contrario , asigna las propiedades de todo al de la izq <- <- <-
// se puede botar todo a una asignacion de una variable
let xd = Object.assign(punto,{p3:12},cmara);
let referencia = Object.assign(punto,cmara);

console.log(punto,xd);
console.log(referencia);// que en este caso la referencia es el mismisimo objeto de punto 


// se puede crear un objeto en base a las propiedades de otros objetos.

// como hacer una copia con las propiedades exactas??
let clonado= Object.assign({},cmara);
console.log(clonado,'\n',cmara);


// forma nueva de copiar
let copia4 = {...cmara};
console.log(copia4);
