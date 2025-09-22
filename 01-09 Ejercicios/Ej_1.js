// ## Ejercicio 1: Gestión de una Tienda de Libros 📚


/**
 * **Objetivo:** Crear un sistema simple para una tienda de libros, manejando el inventario, ventas y autores.

1.  **Crea una función `crearLibro`** que acepte el `titulo`, `autor` (un objeto con `nombre` y `pais`), `precio` y `stock` como argumentos. La función debe retornar un objeto con estas propiedades.
2.  **Crea un arreglo llamado `inventario`** y agrega al menos 4 libros usando la función `crearLibro`.
3.  **Crea una función `venderLibro`** que reciba el `titulo` del libro a vender y la `cantidad`. Esta función debe:
      * Buscar el libro en el `inventario`.
      * Verificar si hay suficiente `stock`.
      * Si hay stock, decrementar la cantidad vendida del `stock` del libro y retornar un mensaje de éxito con el total a pagar.
      * Si no hay stock, retornar un mensaje de error.
4.  **Crea una función `buscarPorAutor`** que reciba el `nombre` del autor y retorne un nuevo arreglo con todos los libros de ese autor.

 */



function crearLibro(titulo,nombreAutor,paisAutor , precio , stock ) {
    return{
        titulo:titulo,
        autor:{
            nombre: nombreAutor,
            pais:paisAutor,
        },
        precio:precio,
        stock:stock,
    };
}

//libroTroll= crearLibro("El libro troll", "elrubiusomg", "España" ,10000, 100);
//console.log(libroTroll);

let inventario =[
    crearLibro("El aleph", "Jorge Luis Borges", "Argentina" , 15000, 40),
    crearLibro("El hechicero de la tribu", "Atilio Boron", "Argentina" ,15000, 30),
    crearLibro("El Che", "Paco Ignacio Taibo Segundo", "Mexico" ,7000, 4),
    crearLibro("El Capital", "Carlos Marx", "Prusia" ,24000, 110),
    crearLibro("Cien años de soledad", "Gabriel García Márquez", "Colombia", 18000, 25),
    crearLibro("Rayuela", "Julio Cortázar", "Argentina", 17000, 15),
    crearLibro("Don Quijote de la Mancha", "Miguel de Cervantes", "España", 22000, 12),
    crearLibro("1984", "George Orwell", "Reino Unido", 16000, 20),
    crearLibro("Ficciones", "Jorge Luis Borges", "Argentina", 14000, 18),
    crearLibro("Pedro Páramo", "Juan Rulfo", "México", 13000, 10),
    crearLibro("La sombra del viento", "Carlos Ruiz Zafón", "España", 19000, 8),
    crearLibro("El Principito", "Antoine de Saint-Exupéry", "Francia", 12000, 30),
    crearLibro("Crónica de una muerte anunciada", "Gabriel García Márquez", "Colombia", 15000, 22),
    crearLibro("Los detectives salvajes", "Roberto Bolaño", "Chile", 20000, 7),
    crearLibro("El Estado y la Revolución", "Vladimir Lenin", "Rusia", 12000, 20),
    crearLibro("Imperialismo, fase superior del capitalismo", "Vladimir Lenin", "Rusia", 11000, 15),
    crearLibro("El origen de la familia, la propiedad privada y el Estado", "Friedrich Engels", "Alemania", 13000, 18),
    crearLibro("Anti-Dühring", "Friedrich Engels", "Alemania", 12500, 12),
    crearLibro("La acumulación del capital", "Rosa Luxemburgo", "Polonia/Alemania", 14000, 10),
    crearLibro("Reforma o revolución", "Rosa Luxemburgo", "Polonia/Alemania", 13500, 8),
    crearLibro("El marxismo y la revolución", "Ernesto Che Guevara", "Argentina/Cuba", 15000, 14),
    crearLibro("El hombre y el socialismo en Cuba", "Ernesto Che Guevara", "Argentina/Cuba", 14500, 9),
    crearLibro("Historia y conciencia de clase", "György Lukács", "Hungría", 16000, 7),
    crearLibro("El marxismo occidental", "Perry Anderson", "Reino Unido", 15500, 11)
];

/*
for (let p of inventario){
    console.log("Titulo: "+p.titulo+"\n autor:"+p.autor.nombre);
}
*/

/**
 * 3.  **Crea una función `venderLibro`** que reciba el `titulo` del libro a vender y la `cantidad`. Esta función debe:
      * Buscar el libro en el `inventario`.
      * Verificar si hay suficiente `stock`.
      * Si hay stock, decrementar la cantidad vendida del `stock` del libro y retornar un mensaje de éxito con el total a pagar.
      * Si no hay stock, retornar un mensaje de error.
 */

function venderLibro (titulo, cantidad){
    for (let p of inventario){
        if (p.titulo===titulo ){
            if (p.stock>=cantidad){
                p.stock= p.stock-cantidad;    
                return "Venta exitosa ";
            }
            return "No existe suficiente stock del libro";
        }
    }
    return console.log("Dicho libro no existe en el inventario");
}

console.log(venderLibro("El Che",2));
console.log(venderLibro("El marxismo occidental",6));
//console.log(inventario);

/**
 * 4.  **Crea una función `buscarPorAutor`** que reciba el `nombre` del autor y retorne un nuevo arreglo con todos los libros de ese autor.
*/
function buscarPorAutor (autor){
    let salidaLibroAutor= [ ];
    for (let p of inventario){
        if (p.autor.nombre===autor) {
            salidaLibroAutor.push(p.titulo);
        }
    }
    return salidaLibroAutor ;
}

console.log(buscarPorAutor("Jorge Luis Borges"));
console.log(buscarPorAutor("Vladimir Lenin"));
console.log(buscarPorAutor("Gabriel García Márquez"));

