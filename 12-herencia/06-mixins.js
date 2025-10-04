// Introducción a los mixins:
// Los mixins son una técnica en JavaScript que permite reutilizar funcionalidades entre diferentes objetos,
// evitando la rigidez de la herencia clásica. Así, podemos componer objetos con solo las capacidades que necesitamos.

/*
let vuela = {
    vuela() {
        console.log('volando');
    }
}
let nada = {
    nada() {
        console.log('nadando');
    }
}
let bano = {
    bano() {
        console.log('yendo al baño');
    }
}
let camina = {
    camina() {
        console.log('estoy caminando');
    }
}

// vuela, nada, camina, va al baño
function Pato () {
  this.name = 'Patito';
}

// camina, nada, va al baño
function Perro () {}

// nada, va al baño
function Pez () {}

// vuela pero no nada, camina ni va al baño
function Avion () {}

function Gato () {}

// Forma compleja ::
/*
Avion.prototype = {
    ...vuela,
}
* /  // Forma simple
Object.assign(Avion.prototype, vuela);
// se asigna de derecha a izq

Object.assign(Pez.prototype, nada, bano)
Object.assign(Perro.prototype, nada,camina,bano)


console.log(Avion.prototype, new Avion);
console.log(Pez.prototype, new Pez);
console.log(Perro.prototype, new Perro);


function mixin(Ctr, ...args){
    Object.assign(Ctr.prototype, ...args);// Olvide usar el spread operator
}

// Ejemplo del uso de funcion
mixin(Gato, nada,camina,bano);
console.log(Gato.prototype, new Gato);


*/



// Definimos funcionalidades independientes como objetos:
const vuela = {
  volar: function() {
    console.log("¡Estoy volando!");
  }
};

const nada = {
  nadar: function() {
    console.log("¡Estoy nadando!");
  }
};

const camina = {
  caminar: function() {
    console.log("¡Estoy caminando!");
  }
};

const vaAlBaño = {
  irAlBaño: function() {
    console.log("¡Estoy en el baño!");
  }
};

// Creación del avión:
// El avión solo puede volar, así que le asignamos la funcionalidad de 'vuela' usando Object.assign.
function Avion() {}
Object.assign(Avion.prototype, vuela);

// Introducción del pez:
// El pez puede nadar e ir al baño, así que combinamos esas funcionalidades.
function Pez() {}
Object.assign(Pez.prototype, nada, vaAlBaño);

// Desarrollo del perro:
// El perro puede nadar, caminar e ir al baño.
function Perro() {}
Object.assign(Perro.prototype, nada, camina, vaAlBaño);

// Combinación en el pato:
// El pato puede volar, nadar, caminar e ir al baño, así que combinamos todas las funcionalidades.
function Pato() {}
Object.assign(Pato.prototype, vuela, nada, camina, vaAlBaño);

// Función 'mixin':
// Para simplificar la composición, podemos crear una función que agrupe la asignación de mixins.
function mixin(destino, ...fuentes) {
  Object.assign(destino.prototype, ...fuentes);
}

// Ejemplo de uso con la función mixin:
function Pato2() {}
mixin(Pato2, vuela, nada, camina, vaAlBaño);






// Conclusión:
// Aunque usar mixins puede requerir más código al principio, permite crear objetos con múltiples funcionalidades
// de forma flexible y mantenible, evitando los problemas de la herencia múltiple y facilitando la reutilización.