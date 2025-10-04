// Nota: Es recomendable tener solo un prototipo dentro de mis funciones

// Diferencia entre herencia y composición en JavaScript
// ------------------------------------------------------

// La herencia permite crear una jerarquía de clases donde los hijos heredan comportamientos del padre.
// Sin embargo, esto puede complicar el código cuando los objetos no comparten exactamente las mismas capacidades.
// Por ejemplo, si creamos una clase Animal y de ahí derivamos Pato, Perro y Pez, podríamos tener problemas
// porque no todos los animales pueden hacer lo mismo (por ejemplo, no todos nadan o vuelan).

// Ejemplo clásico usando funciones constructoras (prototipos):

// Funciones que representan habilidades independientes (mixins)
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
  
// Composición: combinamos solo las habilidades necesarias para cada objeto
function Pato() {}
Object.assign(Pato.prototype, vuela, nada, camina, vaAlBaño);
// El pato puede volar, nadar, caminar y va al baño

function Perro() {}
Object.assign(Perro.prototype, nada, camina, vaAlBaño);
// El perro puede nadar, caminar y va al baño

function Pez() {}
Object.assign(Pez.prototype, nada, vaAlBaño);
// El pez solo nada y va al baño

function Avion() {}
Object.assign(Avion.prototype, vuela);
// El avión solo vuela

// Problema de la herencia tradicional:
// Si usáramos herencia, tendríamos que crear una jerarquía complicada y poco flexible.
// Por ejemplo, si Animal tiene métodos volar y nadar, el pez heredaría volar aunque no pueda hacerlo.

// Solución: Composición y mixins
// Usar mixins permite crear objetos con solo las capacidades necesarias, evitando herencias innecesarias
// y facilitando el mantenimiento y la comprensión del código.

// Recomendación: Limita la herencia a un solo nivel de prototipo y prefiere la composición para mayor flexibilidad.

// Ejemplo de uso:
const pato = new Pato();
pato.volar();      // ¡Estoy volando!
pato.nadar();      // ¡Estoy nadando!
pato.caminar();    // ¡Estoy caminando!
pato.irAlBaño();   // ¡Estoy en el baño!

const pez = new Pez();
pez.nadar();       // ¡Estoy nadando!
pez.irAlBaño();    // ¡Estoy en el baño!

// Como ves, la composición permite crear objetos con las capacidades exactas que necesitan,
// evitando la complejidad y rigidez de la herencia multiple o profunda