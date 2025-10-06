// Para arrastrar elementos de html y soltar en otros elemetnos de html

/*
El Drag and Drop (Arrastrar y Soltar) en JavaScript es una funcionalidad que permite a los usuarios interactuar con elementos de una página web moviéndolos con el ratón. Se implementa utilizando las API de Drag and Drop nativas de HTML5, que proporcionan una serie de eventos DOM específicos (ondragstart, ondragover, ondrop, etc.). Al capturar y gestionar estos eventos, puedes hacer que cualquier elemento sea arrastrable y definir zonas de destino donde el elemento puede ser soltado, permitiendo, por ejemplo, reordenar listas o mover archivos.
*/

let id;

function createDroppableArea (){
    
    let dropArea = document.createElement('div');
    dropArea.className='drop';
    
    // arhora asignando eventos
    
    // Manejador del evento: Cuando un elemento arrastrable ENTRA en la zona de destino (dropArea)
    dropArea.ondragenter = e => {
        // La propiedad 'e.target' se refiere al elemento que está recibiendo el evento (dropArea).
        // Cambia su color de fondo a amarillo para indicar que está activa para el 'drop'.
        e.target.style.background = 'yellow';
    }
    
    // Manejador del evento: Cuando un elemento arrastrable SALE de la zona de destino (dropArea)
    dropArea.ondragleave = e => {
        // Restablece el color de fondo a su valor por defecto (o vacío) cuando el elemento arrastrable sale.
        // Esto revierte el feedback visual.
        e.target.style.background = '';
    }
    dropArea.ondrop = e => {
        e.target.appendChild(document.getElementById(id));
    }
    // para tomar el elemento y dejarlo en e el otro elemento 
    dropArea.ondragover = e => {
        e.preventDefault(); 
    }
    
    return dropArea;
}

function creteDraggable(){
    
    let span = document.createElement('span');
    span.id = 'hola-mundo';
    span.innerText = 'Arrastrable' ;
    span.draggable = true;
    span.ondragstart = e =>{
        id= e.target.id;
    }    
    
    // document.body.append(span);//
    return span;
    // ahora tomar todo y poerlo en una funcion

}





let draggable =creteDraggable();
let dropArea1 = createDroppableArea();
let dropArea2 = createDroppableArea();




document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);

// ahora quiero que cambie el color de fondo cuando arrastre el elemenro en la area
// manipular html



