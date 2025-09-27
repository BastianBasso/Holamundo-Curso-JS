const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    { id: 15 },
    ['lala'], // objeto
];

// console.log(typeof []);


// numeros, String , objetos 
function dividePorTipo(arr) {
    // Se deve devolver 1 objeto con las 3 propiedades
    // Dentro de esas propiedades, deve obtener los typos de datos de estas propueddes
    // console.log( miArray.filter((arr)=> (typeof arr) === typeof{}));
    
    return{
        "numeros":  miArray.filter((arr)=> (typeof arr) === 'number'),
        "object": miArray.filter((arr)=> (typeof arr) === 'object'),
        "strings": miArray.filter((arr)=> (typeof arr) === 'string'),
    }
}

// Object { string: "Hola Mundo", number: 12, object: "{}{id:15}['lala']" }

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);

//const resultado3 = usuarios.find((usuarios)=> usuarios.id===1);