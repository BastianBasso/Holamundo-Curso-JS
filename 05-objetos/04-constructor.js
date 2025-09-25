

// queremos crear 
// {id:1, recuperarclave: function(){}}


//Usar  Upper cammel case en este factory function

// Esta funcion crea un objeto 
function Usuario (){
    this.id = 1;
    // este es el metodo del objeto
    this.recuperarClave= function (){
        console.log('aaaaa');
    };

}

let usuario = new Usuario();
// ocurren 3 cosas al utilizar la palabra reservada new
// Se crea un objeto literal del aire 
// Se vincula el prototipo de la funcion con el usuario que se acaba de crear
// El ibjeto vacio creado del aire, se le asigna la palabra reservad de this
// si no se retorna nada entonces se retorna de manera automatica this

console.log(usuario);


//notas de gemini

/*
### Ejercicios para Internalizar los Conceptos

Para que practiques y entiendas mejor estos conceptos, aquí tienes tres ejercicios que te harán aplicar lo aprendido.

#### Ejercicio 1: Constructor de Coches 🚗

Crea una **función constructora** llamada `Coche`. Esta función debe aceptar el `color`, la `marca`, y el `año` como parámetros. La función debe tener:

* Tres propiedades: `color`, `marca` y `año`, asignadas a los parámetros de entrada.
* Un **método** llamado `describir()` que imprima una frase como: "Este es un coche marca [marca], color [color], del año [año]".

Luego, crea dos nuevos objetos `Coche` con valores diferentes y llama al método `describir()` en ambos.

*/

// Esta funcion crea un objeto 

function ConstructorDeCoches( marca,color, año){
    this.color=color;
    this.marca=marca;
    this.año=año;
    this.describir= function (){
        console.log('Coche de marca',this.marca,'de color: ',this.color,'de año:',this.año);
    };
}

let ferrari = new ConstructorDeCoches("Feraro","Rojo","1989");
let sub = new ConstructorDeCoches("subaru","gray","2003");

console.log();

sub.describir();