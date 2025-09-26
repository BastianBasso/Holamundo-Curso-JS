const punto ={
    x:10,
    y:15,
    dibujar(){ // una forma mejor de crear un metodo
        console.log('Dibujando...');
    }
};
// como listar propiedades de un objeto que podrian haber sido creadas de manera dinamica?

//delete punto.dibujar;
// esto pregunta si existe la propiedad dibujar 
if ('dibujar' in punto){ 
    punto.dibujar();
}

// Object es una propiedad muy util
// Objet.keys devuelve un array con los nombres de las propiedades
console.log(Object.keys(punto));


// ------------------------------------------------



// Recorrer las llaves (propiedades) de un objeto y mostrar su valor

// Object.keys(objeto) devuelve un arreglo con los nombres de las propiedades propias del objeto
for (let llave of Object.keys(punto)) {
    // 'llave' es el nombre de la propiedad (por ejemplo, "x" o "y")
    // punto[llave] accede al valor de esa propiedad
    console.log(llave, punto[llave]);
    // Ejemplo de salida: x 10, y 15
}

// Recorrer los pares [llave, valor] de un objeto

// Object.entries(objeto) devuelve un arreglo de arreglos, cada uno con [llave, valor]
for (let entry of Object.entries(punto)) {
    // 'entry' es un arreglo de dos elementos: [nombrePropiedad, valor]
    console.log(entry);
    // Ejemplo de salida: ["x", 10], ["y", 15]
}

// sirve para ver las propiedades de un objeto cuando no conocemos sus propiedades



// metodo nuevo y mejor para iterar en propiedades::
for (let llave in punto) {
    console.log(llave, punto[llave]);
}