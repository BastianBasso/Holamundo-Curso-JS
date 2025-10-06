// Es probable que no ocupe esto por que voy a terminar utilizando frameworks

//

// Define la función de validación que recibe un objeto 'data' (que contiene los datos del formulario, ej: {name: '...', lastname: '...'}).
let validate = data => {
    // Inicializa un objeto vacío para almacenar cualquier error encontrado.
    let errors = {};

    // --- Validar el campo 'name' ---
    // Si la propiedad 'name' en 'data' es falsa (es decir, null, undefined, cadena vacía ''), entra en el 'if'.
    if (!data.name) {
        // Agrega una propiedad 'name' al objeto 'errors' con el mensaje de error.
        errors.name = 'Campo obligatorio';
    }

    // --- Validar el campo 'lastname' ---
    // Si la propiedad 'lastname' en 'data' es falsa.
    if (!data.lastname) {
        // Agrega una propiedad 'lastname' al objeto 'errors' con el mensaje de error.
        errors.lastname = 'Campo obligatorio';
    }

    // Retorna el objeto 'errors'. 
    // Si está vacío ({}), la validación fue exitosa.
    // Si tiene propiedades ({name: '...', lastname: '...'}), la validación falló.
    return errors;
}
let initialValues ={
    name: 'Bastian',
    lastname: 'Basso',
}

let render = ({data,errors}) =>{
    return`
        <form name='formulario'>
            <div>
                <label>Nombre:</label>
                <input name="name" value="${data.name}" />
                ${errors.name || ''}
            </div>
            <div>
                <label>Apellido:</label>
                <input name="lastname" value="${data.lastname}" />
                ${errors.lastname || ''}
            </div>
            <div><button>Enviar</button></div>
        </form>    
    `
}
// Se crea un NUEVO elemento <form> vacío en el DOM.
let form = document.createElement('form');

// Se llama a 'render()' para obtener la cadena HTML del formulario y se la asigna al 'innerHTML' del 'form' creado.
// NOTA: Esto INSERTA el contenido del formulario DENTRO del <form> que creamos arriba.
// Resultado: <form><form name='formulario'>...</form></form> (¡El formulario está anidado dentro de otro!).
form.innerHTML = render({data: initialValues,errors:{}});

// El formulario ANIDADO se inserta al final del <body> de la página.
document.body.append(form);


// manipulado el formulario
form.addEventListener('submit', e => {
    // 1. Evita que el navegador recargue la página (comportamiento por defecto del formulario).
    e.preventDefault(); 
    // 2. Muestra en consola una NodeList con todos los elementos de control (inputs, botones, etc.) del formulario que disparó el evento (e.target).
    let data= Array.from(e.target.elements).reduce( (acc,el) =>{
        if(!el.name) return acc;
        acc[el.name] = el.value;
        return acc;
    },{})
    const errors = validate(data);
    console.log(errors);
    if (Object.keys(errors).length > 0) {
        // Si hay errores (el objeto 'errors' tiene propiedades)...
        let html = render({ errors, data });
        // Vuelve a renderizar el formulario, pasándole los errores y los datos ingresados.
        form.innerHTML = html;
        // Sobreescribe el HTML interno del formulario con el nuevo HTML (que ahora debería mostrar los errores).
    }
});

// podemos agregar errores en caso de que el usuario no ponga bien los datos
    




// ahora solo falt enviar los valores del formulario a un servidor 
    // utilizar promesas o asincronia , para enviar los datos al servidor
