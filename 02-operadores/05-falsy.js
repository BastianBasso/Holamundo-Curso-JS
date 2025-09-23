// short circuit
// false

// Que valores evaluan en falso? 
// false
// 0
// ''
// null 
// undefined
// NaN

// estos son las falsly


let nombre = 'Pinguino';

let username = nombre || 'Anonimo';
// caso de uso del or en  short circuit
console.log(username);



// caso de uso de and en short circuit
function fn1 () {   
    console.log('Soy funcion 1');
    return false;
}

function fn2 () {
    console.log('Soy funcion 2');
    return true;
}


let x = fn1() && fn2();


