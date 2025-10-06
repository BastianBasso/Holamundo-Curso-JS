

// Estpos gets, buscan los indices
    // Id Classe Name Tagname


// **HTMLElement** 
let HTMLElement = document.getElementById('cuerpo');
    // este es un html div (p paragraph , span , etc) elemnt 


let elementosRed= document.getElementsByClassName('red');
// Devuelve un **HTMLCollection**
        // SE parece a un array pero no lo es

let elementosChanchito =document.getElementsByName('chanchito');
// Acá devuelve una **NodeList** , se parece a una html collection pero
    // Tienen diferencias 

    // Aca selecciono todos los elementos de parrafo <p> --> p
let parrafos = document.getElementsByTagName('p');
// aca retorna un **HTMLCollection** 




// Los queris buscan todos los elementos

// **HTMLElement**
let el = document.querySelector('#cuerpo'); // # select id\
    // Buscar por clase(.) id (#) de css 
let els = document.querySelectorAll('p');
    // **NodeList**


// Difenecias entre **HtmlCollection** y una **NodeList**

//**HtmlCollection**
    // No importa cuanto modifiquemos el DOM 
    // HTMLColl , reflejara los ultimos cambios hechos al dom

// **NodeList**
    // No simpre se va a sincronizar con los cambios que tengamos en el DOM


// Ejercicio de comparacion
let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p')
console.log(plive,pstatic);


let nuevoP = document.createElement('p')// ahora agrege un  elemento extra , 
document.body.append(nuevoP);
console.log(plive,pstatic);
// Html collection sirve para ver los cambios totales
// Si queremos ver los cambios ahora , deveriamos hacer denuevo un querry selector
