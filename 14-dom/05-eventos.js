// Sobre los eventos en js, los que son gatillados por el usuario cuando interactua con el sitio web 


// 1. Crear el elemento <form>
let form = document.createElement('form');
// Asignarle un ID para poder referenciarlo fácilmente
form.id = 'mi-formulario';

// 2. Crear el elemento <input>
let input = document.createElement('input');
// Asignarle el atributo 'type' para que sea un campo de texto
input.setAttribute('type', 'text');

// 3. Crear el elemento <button>
let btn = document.createElement('button');
// Asignarle el texto visible al botón
btn.innerText = 'Enviar';

// 4. Estructurar el formulario: Añadir el input y el botón al formulario
// Ambos se añaden al final del 'form'
form.append(input);
form.append(btn);

// 5. Insertar todo en la página: Añadir el formulario completo al final del <body>
document.body.append(form);



// ahora a asignarle eventos



form.onmouseenter = e => {
    console.log('entra el mouse', e);
} 

// cuiando pasa pro encima del mouse , se resalta como evento

// propiedades importantes::
    // target (a que se le asigno el evento?)
    // clien x 
    // clien y (pro donde paso el mouse?) 
    //from element (de donde veien)

//sale em lmouse
form.onmouseleave = e => {
    console.log('Sale el mouse', e);
} 




// ahora eventos en el texto del boton

input.onfocus = e => {
    console.log('input con focus');
}

input.onblur  = e => {
    console.log('Perdio el foco');
}
// interesante para cuando se deselecciona el recuadro de texto 


input.onchange = e => {
    console.log('Valor cambia',e.target.value); // ojo 
} 


// cada vez que se pincha sobre el boton
input.onclick = e => {
       // Cada vez que se hace clic en el 'input', se ejecuta la función.
       // 'e' es el objeto Evento que contiene información del clic.
        e.preventDefault();
    /* // Evita la acción por defecto del navegador para este evento.
       // En el contexto de un formulario, esto es CRUCIAL:
       // - Evita que el formulario se envíe (submit) y recargue la página.
    */
        console.log('Boton clickeado'); // ojo 
    /* // Simplemente imprime el texto 'Boton clickeado' en la consola del navegador.
       // Esto se usa para verificar que el evento se ejecutó correctamente.
    */
}


// Ahroa a hacer lo mismo pero con add event lissener


btn.addEventListener('click',
    input.onclick = e => {
            e.preventDefault();
            console.log('Boton clickeado'); 
        
})
            // evento, funcion, arhoa si me pesca OperaGx!!