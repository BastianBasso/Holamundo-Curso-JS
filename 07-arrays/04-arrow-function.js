// Fat arrow functions
// mas adelante se vera este tema en profundidad

function hola(){
    return 'Hola mundo';
}
const resultado = hola();

// existe una manera mejor de hacer esto

const holaa =  () =>{
    return 'Hola mundo';
}
//Todas las fat arrow functions on anonimas
// no existe ninguna parte donde se le asigna un nombre
// completamente anonima
// si quiero referenciar esta funcion en un futuro tengo que asignarsela a una const o let

const res = holaa();
// asi se llaman


// Funcionalidad de return  implicito
// ESto es lo mismo de arriba 
const holaaa =  (mensaje) => mensaje + 'Hola mundo';
const hola2 =  (mensaje) =>{
    return mensaje + 'Hola mundo';
} 


