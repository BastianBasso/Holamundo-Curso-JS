/*
    ##Los objetos##
Son tipos de referencia , cuando se almacenan en la memoria ram , se almacena una direccion de memoria en el heap que lleva a la ubicacion de nuestros datos.

objetos Son una agrupacion de datos que hacen sentido tenerlos juntos.

Persona:
    Edad
    pezo
    altura
    etc

Auto 
    Modelo
    Año de produccion 
    motor
*/

// Personaje de tv


/*
let personaje ={
    nombre: "Tanjio", // Par llave valor
    anime: "Deamon Slayer", // propiedad~~ llave
    edad: 16,
};

let personaje_sailor ={
    nombre: "Serena", // Par llave valor
    anime: "Sailor Moon", // propiedad~~ llave
    edad: 13,
};

console.log(personaje.anime);
console.log(personaje_sailor['edad']);

personaje_sailor.edad += 1;

console.log(personaje_sailor['edad']);

delete personaje.anime;
console.log(personaje);
*/

// Crear funcion de crear objeto y usarla

// Ejercicio con eso 


function crearPersonaje(nombre, anime, edad){
    return{
        nombre: nombre,
        anime: anime,
        edad:edad,
    };
}


let personajeSailor =crearPersonaje ("Serena","Sailor Moon",13);
let personajeDeamon =crearPersonaje ("Tanjio"," Deamon slayer",);
let personajeEthan =crearPersonaje ("Ethan hound","Ethan Hound",27);
let personajeJuan =crearPersonaje ("JuanSalvo","El eternauta",34);

console.log(personajeDeamon);
console.log(personajeSailor);
console.log(personajeEthan);
console.log(personajeJuan);

console.log("Nada\n\n\n");

/*
Ejercicio: Lista de personajes y acceso a sus propiedades
    ->Crea una función llamada crearPersonaje como la que ya tienes.
    ->Crea un arreglo llamado personajes y agrega varios personajes usando la función.
    ->Recorre el arreglo y muestra en consola el nombre y anime de cada personaje.
    ->Agrega una nueva propiedad llamada habilidad a cada personaje y muestra todas sus propiedades.
*/


let personajes = [
    crearPersonaje("Carlos","Carlosanime","80"),
    crearPersonaje("Sonic","SonicX","20"),
    crearPersonaje("Twilight","MLP","25"),
];


for (let p of personajes){
    console.log("Nombre:",p.nombre ," | Anime", p.anime);
}

personajes[0].habilidad ="Carlos";
personajes[1].habilidad ="Velocidad";
personajes[2].habilidad ="Magia";


for (let p of personajes){
    console.log(p);
}






















