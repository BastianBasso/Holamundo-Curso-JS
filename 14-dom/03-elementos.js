// como crear elementos html 

let el =document.createElement('p');

el.innerHTML = "Element creted";
document.body.append(el);

// agregado al html




// --- Diferencia entre innerText e innerHTML ---
// 1. Uso de innerText
el.innerText = "<ul><li>Hola mundo</li></ul>";
/* Esta línea inserta el texto "<ul><li>Hola mundo</li></ul>" DENTRO del elemento 'el'.
El navegador NO interpreta las etiquetas HTML (<uL>, <li>) como código.*/

// 2. Uso de innerHTML
el.innerHTML = "<ul><li>Hola mundo</li></ul>";
/* Esta línea inserta el contenido HTML "<ul><li>Hola mundo</li></ul>" DENTRO del elemento 'el'.
El navegador SÍ interpreta las etiquetas (<uL>, <li>) como código.
En la página, verás una lista no ordenada (<ul>) con un ítem (<li>) que dice "Hola mundo".
*/



// La variable 'el' referencia a un elemento del DOM (por ejemplo, un <p> o <div>).

// Establece estilos CSS en línea: el fondo es rojo y el texto en negrita.
el.style = 'background-color: green; font-weight: bold;';

// Asigna o sobrescribe el atributo 'class' del elemento con el valor 'parrafo'.
el.className = 'parrafo';

// Asigna o sobrescribe el atributo 'id' del elemento con el valor 'mi-parrafo'.
el.id = 'mi-parrafo';

// Crea o establece una PROPIEDAD DIRECTA en el objeto DOM JavaScript 'el'.
// OJO: Esto NO crea un atributo HTML en el elemento que se vea en el inspector del navegador.
el.mipropiedad = 'mi propiedad';
// osea esto no sirve


// como agregar atributo BIEN!!
el.setAttribute('mipropiedad','mi propiedad');
    // asi si se pueda agregar una propiedad a la linea
    /* Crea o actualiza un atributo HTML real en el elemento del DOM. 
       Esto es lo que se vería si inspeccionas el HTML en el navegador:
       <div mipropiedad="mi propiedad">...</div>
    */




// como capturar valores?

// . getAttribute(nombre)
el.getAttribute('mipropiedad');
/* Devuelve el valor (en este caso, 'mi propiedad') del atributo HTML especificado. 
   Si el atributo no existe, devuelve 'null'.
*/

// . hasAttribute(nombre)
el.hasAttribute('mipropiedad');
/* Devuelve 'true' si el atributo HTML especificado existe en el elemento. 
   Devuelve 'false' si no existe.
*/