/*
Excelente idea. Basado en la sección de "learn x in y" que proporcionaste, he creado una serie de ejercicios que te permitirán repasar y combinar los conceptos de **variables**, **arreglos**, **objetos** y **lógica de control** (`if`, `while`, `for`).

---

## Ejercicio 1: Gestión de un Inventario Simple 📦

El objetivo de este ejercicio es combinar variables, arreglos y objetos para simular un inventario básico de una tienda.

1.  **Crea un arreglo llamado `inventario`**. Este arreglo almacenará los productos de tu tienda.
2.  **Crea 3 o 4 objetos**, cada uno representando un producto. Cada objeto debe tener las siguientes propiedades:
    * `nombre`: (string) El nombre del producto, por ejemplo "Laptop".
    * `precio`: (number) El precio unitario.
    * `stock`: (number) La cantidad disponible.
3.  **Agrega cada uno de estos objetos** al arreglo `inventario`.
4.  **Usa un bucle `for`** para recorrer el arreglo `inventario`. Dentro del bucle, haz lo siguiente:
    * Imprime el nombre de cada producto y su `stock` actual.
    * Usa una estructura `if` para verificar si el `stock` de un producto es menor que 10. Si es así, imprime un mensaje de alerta, como: "¡Alerta, queda poco stock de [nombre del producto]!".
*/

let inventario = [];

let tenedor = {
    nombre: "Tenedor",
    precio: 1000,
    stock: 500,
};

let microfono = {
    nombre: "Microfono",
    precio:23000,
    stock:30,
};

let libreta = {
    nombre: "Libreta",
    precio:3000,
    stock:100,
};

let calcetin = {
    nombre: "Calcetin",
    precio:3000,
    stock:8,
};

inventario.push(tenedor);
inventario.push(microfono);
inventario.push(libreta);
inventario.push(calcetin);

console.log(inventario.length);

for (let index = 0; index < inventario.length; index++) {
    //const element = array[index];
    if (inventario[index].stock>=10){
    console.log("Producto::", inventario[index].nombre, "Stock::", inventario[index].stock );
    } else{
        console.log("¡Alerta, queda poco stock de", inventario[index].nombre, "!");
    }
}



/*
---

## Ejercicio 2: Analizador de Calificaciones 🎓

Este ejercicio se centra en el uso de arreglos y lógica de control para procesar un conjunto de datos numéricos.

1.  **Crea un arreglo llamado `calificaciones`** y llénalo con al menos 10 números que representen calificaciones (por ejemplo, del 1 al 100).
2.  **Inicializa tres variables**: `aprobados`, `reprobados`, y `promedio`, todas con un valor inicial de `0`.
3.  **Usa un bucle `for`** para iterar sobre el arreglo `calificaciones`. En cada iteración:
    * Usa una estructura `if` para verificar si la calificación actual es mayor o igual a 60.
    * Si es aprobatoria, incrementa la variable `aprobados`. De lo contrario, incrementa la variable `reprobados`.
    * Suma la calificación actual a la variable `promedio`.
4.  **Después del bucle**, calcula el promedio final dividiendo la suma total entre el número de calificaciones.
5.  **Imprime** en la consola el número total de aprobados, el de reprobados, y el promedio final.

*/


let calificaciones = [27,40,55,58,43,62,51,48,55,68];
let aprobados = 0;
let reprobados = 0;
let promedio = 0;

for (let index = 0; index < calificaciones.length; index++) {
    //console.log(calificaciones[index]);
    if (calificaciones[index]>40){
        aprobados++;
    } else{
        reprobados++;
    }
    promedio += calificaciones[index];
}
promedio= promedio/calificaciones.length;

console.log("Aprobados: ",aprobados);
console.log("Reprobados: ",reprobados);
console.log("Promedio final: ",promedio);
