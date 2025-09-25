
// Crear unalgoritmo que toma un array 
//     Ese array contiene un listado de objetos
//     la funcion deve devolver un array de pares


let arr =[{
    id:1,
    name: 'Nicolas',
},{
    id:2,
    name: 'Felipe',
},{
    id:3,
    name: 'Chanchito',
}];


let pares =[
    [1, { id: 1, name: "Nicolas" }],
    [2, { id: 2, name: "Felipe" }],
    [3, { id: 3, name: "Chanchito"}],
]


function toPairs(array) {

    let pares=[];

    for (let i = 0; i < array.length; i++) {
        //const element = array[i];
        pares[i]= [array[i].id, array[i]]; 
    }

    return pares;
}

let resultado = toPairs(arr);

console.log(resultado);
