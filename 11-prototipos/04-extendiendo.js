// Exteender los prototipos de funciones constructoras que ya existan en el sistema
// ejemplo
// Object  . prototipe  [Metodo a agregar]
// aqui agregamos isEqual
Object.prototype.isEqual = function (obj){
    //
    console.log('Esta funcionando');
} 


let x ={};
x.isEqual({a:2});

// que pasa cuando se agregan libreria y se actualizan los metodos?
// Esta la posibilidad de refactorizacion

// No extender los prototipos de funciones prototipos que tiene js
// Objects string Number MAth , extender algo de ahi puede terminar con problemas gatales para el codigo desarrollado 