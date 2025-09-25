let pares =[
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "Chanchito"}],
]


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


function toArrObj(array) {

    let arr=[];

    for (let i = 0; i < array.length; i++) {
        //const element = array[i];
        arr[i]= {id:array[i][0], nombre: array[i][1].name}; 
    }

    //return [{id:array[0][0], nombre: array[0][1].name}] ;
    return arr;
}

let resultado = toArrObj(pares);

console.log(resultado);
