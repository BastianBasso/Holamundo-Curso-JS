/**
 * ## Ejercicio 4: Sistema de Inventario para un Videojuego 🕹️

**Objetivo:** Simular un sistema de inventario de un personaje en un videojuego usando objetos anidados y arreglos.

1.  **Crea una función `crearItem`** que reciba un `nombre`, `tipo` (por ejemplo, "arma", "pocion", "armadura") y `stats` (un objeto con propiedades como `ataque`, `defensa`, `curacion`).

2.  **Crea un objeto `personaje`** con propiedades como `nombre`, `salud`, `ataque` y un arreglo vacío llamado `inventario`.
3.  **Crea una función `equiparItem`** que reciba el objeto `personaje` y un objeto `item`. La función debe:
      * Agregar el `item` al arreglo `inventario` del personaje.
      * Aumentar las `stats` del personaje según el tipo de `item`. Por ejemplo, si es un arma, sumar el `ataque` del `item` al `ataque` del personaje. Si es una poción, sumar la `curacion` a la `salud` del personaje.
4.  **Crea una función `mostrarInventario`** que reciba el objeto `personaje` y recorra su `inventario` para mostrar una lista de los items que tiene.

*/






/**
 * 1.  **Crea una función `crearItem`** que reciba un `nombre`, `tipo` (por ejemplo, "arma", "pocion", "armadura") y `stats` (un objeto con propiedades como `ataque`, `defensa`, `curacion`).
*/


// 1. Definimos las funciones y el objeto personaje
function crearItem(nombre, tipo, stats) {
    return {
        nombre: nombre,
        tipo: tipo,
        stats: stats
    };
}

let link = {
    nombre: "Link",
    salud: 100,
    ataque: 10,
    inventario: []
};

function equiparItem(personaje, item) {
    personaje.inventario.push(item);
    switch (item.tipo) {
        case "arma":
            if (item.stats.ataque) {
                personaje.ataque += item.stats.ataque;
                console.log(`${personaje.nombre} ha equipado ${item.nombre}. Ataque aumentado en ${item.stats.ataque}.`);
            }
            break;
        case "pocion":
            if (item.stats.curacion) {
                personaje.salud += item.stats.curacion;
                console.log(`${personaje.nombre} ha usado ${item.nombre}. Salud restaurada en ${item.stats.curacion}.`);
            }
            break;
    }
}

function mostrarInventario(personaje) {
    console.log(`\nInventario de ${personaje.nombre}:`);
    if (personaje.inventario.length === 0) {
        console.log("Inventario vacío.");
        return;
    }
    
    personaje.inventario.forEach(item => {
        console.log(`- ${item.nombre} (${item.tipo})`);
    });
}


// 2. Creamos los ítems
let espada = crearItem("Espada Maestra", "arma", { ataque: 30 });
let pocion = crearItem("Poción de vida", "pocion", { curacion: 50 });

// 3. Probamos las funciones
console.log("--- Antes de equipar ---");
console.log(link);

equiparItem(link, espada);
equiparItem(link, pocion);

console.log("\n--- Después de equipar ---");
console.log(link);

mostrarInventario(link);