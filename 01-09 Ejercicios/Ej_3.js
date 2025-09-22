/**
 * 
## Ejercicio 3: Calculadora de Estadísticas para Arreglos 📈

**Objetivo:** Crear funciones que realicen cálculos estadísticos sobre un arreglo de números, combinando bucles y lógica.

1.  **Crea una función `calcularPromedio`** que reciba un arreglo de números. La función debe sumar todos los elementos y devolver el promedio. Si el arreglo está vacío, debe retornar 0.
2.  **Crea una función `encontrarExtremos`** que reciba un arreglo de números. La función debe devolver un objeto con las propiedades `minimo` y `maximo` con los valores correspondientes. Puedes usar un bucle `for` o `for...of`.
3.  **Crea una función `contarParesImpares`** que reciba un arreglo de números. La función debe devolver un objeto con las propiedades `pares` e `impares`, conteniendo la cantidad de cada tipo.


*/
function calcularPromedio( arreglo ){
    if(arreglo.length === 0 ){
        return "ERROR datos vacios";
    } 
    console.log(arreglo.length );
    let resultado = 0;
    for (let elemento of arreglo){
        resultado += elemento;
    }
    resultado = resultado/arreglo.length;
    return resultado.toFixed(2);
}

function encontrarExtremos( arreglo ){
    let min=0;
    let max=0;
    if(arreglo.length === 0 ){
        return "ERROR datos vacios";
    } 
    min=arreglo[0];
    max=arreglo[0];
    
    for (let elemento of arreglo){
        if(min>elemento){
            min=elemento;
        }
        if(max<elemento){
            max=elemento;
        }    
    }
    //console.log(max, min);
    return {
        minimo: min,
        maximo: max,
    };
}

/**
 * 3.  **Crea una función `contarParesImpares`** que reciba un arreglo de números. La función debe devolver un objeto con las propiedades `pares` e `impares`, conteniendo la cantidad de cada tipo.
*/
function contarParesImpares( arreglo ){
    let c_par=0;
    let c_impar=0;
    if(arreglo.length === 0 ){
        return "ERROR datos vacios";
    } 
    
    for (let elemento of arreglo){
        if(elemento%2 == 0){
            c_par++;
        }
        else{
            c_impar++;
        }    
    }
    //console.log(max, min);
    return {
        pares: c_par,
        impares: c_impar,
    };
}







let numeros = [5, 12, 3, 40, 8, 15];

console.log(calcularPromedio(numeros)); // Debería ser 13.83

console.log(encontrarExtremos(numeros));

console.log(contarParesImpares(numeros)); // Debería ser { pares: 3, impares: 3 }