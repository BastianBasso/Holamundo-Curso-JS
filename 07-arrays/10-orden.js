let numeros = [15,10,-3];

numeros.sort();// se ordena de menor a mayor
console.log(numeros);


numeros.reverse();
console.log(numeros);
// de + a - 


// ambos  tambien funciona con las letras

let letras=['z','b','Z','a','y'];
console.log(letras.sort());
// Como en ascii la z mayuscula es mayor, entonces tengo que reordenar de otra forma con sort para mostrarla al final

let letras2=['z','b','Z','a','y'];
letras2.sort((a,b)=>{
    /*
como funcionaba el tema de los datos de entraada de la funciion fat arrow?
R: se ordena en torno a 'b', si a es menor a b => -1
 si b es mayor a a =>1 , iguales == 0;
    */
    let alower=a.toLowerCase();
    let blower=b.toLowerCase();
    if (alower<blower) {
        return -1;
    }
    if (blower<alower) {
        return 1;
    }
    return 0;
});

console.log(letras2);// ojo, z mayuscula esta al final


let usuarios =[
    {edad:15,nombre:'Felipe'},
    {edad:25,nombre:'Nicolas'},
    {edad:13,nombre:'Poli'},
];

usuarios.sort((a,b) =>{
    let alower=a.edad;
    let blower=b.edad;
    if (alower<blower) {
        return -1;
    }
    if (blower<alower) {
        return 1;
    }
    return 0;
});
console.log(usuarios);
// se ordeno ahora respecto a edad








