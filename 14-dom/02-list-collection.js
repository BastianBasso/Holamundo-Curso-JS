// listas vs collecciones
let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

// Diferencias entre (H)collecciones y las (N)listas


// // (H)colecciones
// let item1 = collection.namedItem('chanchito'); 
//     // con esto se puede buscar elementos por propiedad de name

// let item2 = collection.item(3); 
//     // acceder a el elemento segun su pocicion en la colleccion 

// let item3 = collection[3]; 
//     // Tambien se puede ver accediendolo como  array
//         // ojo , no es un array , es un Objeto Collection , nada que ver con array

// //collection.forEach(x =>console.log(x));
//     // HtmlCollection , no tiene formas para poder iterarlo 

// //Iterar elementos 
// for (let el of collection){
//     console.log(el);
// }
// // así se pueden iterar, imprime todo , no imprime 

// // Tambien se puede tomar la colleccion y transformarla en un Array
// Array.from(collection).forEach(x=> console.log(x));
// // o tambien::
// [...collection].forEach(x=> console.log(x));
//     // nos muestra el elemtno mismo 

// // queda pendiente ver como puedo ver el objeto en ves de ver el elemento mismo 

// console.log(`\n\n\n`);



// // Acceder a elementos

// let itemA = list.item(3);
// let itemB = list[3];
//     // devuelven lo mismo
// // solo se puede acceder a los elementos por sus indices


//entries, keys y values
let entries = list.entries();
// La línea let entries = list.entries(); crea un objeto iterable (entries) que te permite recorrer la NodeList (list) obteniendo el índice (posición) y el elemento DOM (el valor) al mismo tiempo.
    
    // entries.next() para iterar en los elementos

let keys = list.keys();
let values = list.values();
    /// lo mismo se puede decir esto

// tambien se puede acceder con:

//[...list].
    // para un mejor filtro 