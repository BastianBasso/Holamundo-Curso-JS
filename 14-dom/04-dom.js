// como manipular el dom

let el = document.createElement('p');
el.innerText = 'Elemento creado';

// texto y nodos (puede recivir)
document.body.append(el);


// el.remove(); // toma prioridad el primero en ser creado ?

document.body.prepend(el); //este es para agregar elemento/text al comienzo 


// nota : las referencias a estos elemetos son unicas


let div = document.createElement('div');
div.innerText = 'Soy un texto';



// como manipular el dom



let div1 = document.createElement('div');
div1.innerText = 'Soy un texto ojojojojoj';
/*
Se crea un NUEVO elemento <div> y se le asigna un texto.
- Se enseña que cada vez que llamas a 'createElement()', creas un objeto DOM totalmente independiente.
- Este <div> aún NO es visible en la página porque NO ha sido añadido (con 'append' o 'prepend') a la estructura del documento.
*/
document.body.append(div1);



// Formas de Remplazar:

el.replaceWith(div);
// Sirve para reemplazar el elemento 'el' por el elemento 'div' en el DOM.

document.body.replaceChild(el, div1);
// Sirve para reemplazar un nodo HIJO existente (div1) por un nodo NUEVO (el) dentro de su padre (document.body).

document.body.removeChild(el);
// Sirve para eliminar un nodo HIJO ('el') de su nodo PADRE (document.body).

document.body.appendChild(el);
// Sirve para añadir el nodo 'el' al FINAL de los hijos de su nodo PADRE (document.body). (Nota: al igual que 'append()', solo que 'appendChild' solo recibe Nodos).

// como insertar un elemento antes de otro que queremos
document.body.insertBefore(div, el);
// Sirve para insertar el nodo 'div' antes de un nodo de referencia ('el') dentro de su padre (document.body).

document.body.insertAdjacentElement('afterrend',div);
    // Solo 4 opciones
// ERROR: La sintaxis es incorrecta. Debería ser 'afterend' y requiere un segundo argumento (el elemento a insertar).
// Sirve, en general, para insertar un elemento en una posición relativa a otro elemento (antes de que empiece, después de que acabe, etc.).









/* Los métodos insertAdjacent permiten insertar contenido (HTML o texto)
   en una posición RELATIVA a un elemento (aquí, document.body).
   Requieren (posicion, contenido)
*/

// document.body.insertAdjacentHTML(position, htmlText);
document.body.insertAdjacentHTML();
/* // Sirve para: Insertar una cadena de texto que el navegador INTERPRETA como HTML.
   // Permite: Añadir NUEVOS elementos DOM.
   // Ej: .insertAdjacentHTML('afterbegin', '<h1>Título</h1>');
*/

// document.body.insertAdjacentText(position, data);
document.body.insertAdjacentText();
/* // Sirve para: Insertar una cadena de texto SIMPLE (plano).
   // El navegador NO: Interpreta etiquetas HTML (las muestra como texto).
   // Ej: .insertAdjacentText('beforeend', 'Texto sin formato');
*/