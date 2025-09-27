console.log('Hola mundo');



const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el, // esto muestra el atributo nombre y su valor
}), {});

console.log(indexado);