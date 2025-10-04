// Como implementar herencia usando los prototipos en Js

function User() {
    this.name = 'Hola Mundo';
}
// agregar el prototipo con el metodo save
/*User.prototype.save = function () {
    console.log('guardando...');
}*/
  
function Product() {
    this.name = 'Producto';
}
// agregar el prototipo con el metodo save
/*Product.prototype.save = function () {
    console.log('guardando...');
}*/
// no va a servir este acercamiento para reutilizar codigo
// Se deveria crear una Funcion superior entidad, la cual tenga los metodos save y validate, osea
// Tomamos los prototipos de entidad y se los asignamos a user y a product
// antes el problema es que la funcion esta duplicada en los objetos construidos, duplico el codigo haciendolo ineficiente
//==============================================================
// SOLUCIÓN: HERENCIA PROTOTÍPICA (Reutilización de código)
//==============================================================
//               +----------------+
//               |  Entidad()     | <--- Función Superior
//               +----------------+
//                      |
//                      v
//               +------------------+
//               | Entidad.prototype|
//               | - save()         | <--- Única copia de save()
//               | - validate()     | 
//               +------------------+
//                    ^    ^
//                    |    |
//      (Hereda Prototipo) (Hereda Prototipo)
//                    |    |
//               +---------+----------+
//               | User()  | Product()|
//               +---------+----------+
// Resultado: User y Product acceden al mismo .save() de Entidad
//==============================================================



function Entidad() {};

Entidad.prototype.save = function () {
    console.log('guardando', this.name);
}
Entidad.prototype.validate = function () {
    console.log('Validando', this.name);
}

// ahora como enlazo?, hay varias formas!


// // Enlaze 1
// User.prototype = Entidad.prototype;
// Product.prototype = Entidad.prototype;
// // ahora sale que la funcion constructor de este  codigo dice 
// // que es Entidad(), eso no está bien, toca cambiarlo::
// //Product.prototype.constructor = Product;
// User.prototype.constructor = User;


// Sin embargo se pierde la funcion constructora de Entidad

// Como preservar el constructor de entidad ?
// tenemos que crear otro objeto en medio de las 2 cosas, de modo tal que este vacio y sea un enlace entre las 2 entidades

User.prototype =Object.create(Entidad.prototype);
// ahora como preservar el cosntructor del usuario::
// Con esto se le mantiene el constructor de usuario al prototipo Entidad
User.prototype.constructor = User;

const user = new User();
console.log(user);


// Creamos un objeto de usuario , le vinculamos un prototipo, el cual es un objeto vacio completamente exepto por la propiedad constructor
// arriva de eso tenemos el protoripo de entidad , con las propiedades de save y de validate
// tenemos una cadena de prototipos hacia arriva y conservamos esa propiedad de constructor

Object.setPrototypeOf(User.prototype, Entidad.prototype);
                        // izq hereda de derecha



//==============================================================
// SOLUCIÓN FINAL: HERENCIA CONSERVANDO EL CONSTRUCTOR
//    (Usando Object.create para la herencia)
//==============================================================
//
// 1. Instancia del Objeto (e.g., 'user')
//    +------------------+
//    | user             |  <-- Instancia creada con 'new User()'
//    | - name: "..."    |
//    +------------------+
//             |
//             | [[Prototype]] (Herencia)
//             v
//
// 2. Prototipo Intermedio (user.constructor = User)
//    +------------------------+
//    | User.prototype         |  <-- Objeto NUEVO creado con Object.create()
//    | - constructor: User()  |  <-- ¡Corregido! Apunta a la función User()
//    +------------------------+
//             |
//             | [[Prototype]] (Herencia)
//             v
//
// 3. Prototipo Superior (Entidad)
//    +------------------+
//    | Entidad.prototype|  <-- Objeto del cual heredan los métodos
//    | - save()         |
//    | - validate()     |
//    | - constructor: Entidad |
//    +------------------+
//
//
// Objetivo: user puede llamar a user.save() y aún reporta 'User' como constructor.
//==============================================================


// manera mejor para setear los prototipos:


console.log('\n\n\n');





//====================================================================
// HERENCIA PROTOTÍPICA CON OBJECT.CREATE() (Método Recomendado)
//
// Usaremos Animal como la clase base (Superclase) y Gato como la subclase.
//====================================================================

// 1. FUNCIÓN CONSTRUCTORA BASE (Superclase)
function Animal(especie) {
    this.especie = especie || 'Mamífero';
}

// 2. MÉTODOS COMPARTIDOS EN EL PROTOTIPO DE LA BASE
Animal.prototype.moverse = function() {
    console.log(`El ${this.especie} se está moviendo.`);
};

Animal.prototype.alimentarse = function() {
    console.log(`El ${this.especie} está comiendo.`);
};


// 3. FUNCIÓN CONSTRUCTORA HIJA (Subclase)
function Gato(nombre) {
    // Llamamos al constructor padre para inicializar propiedades de la base
    // NOTA: Esto solo inicializa propiedades propias, no enlaza prototipos.
    Animal.call(this, 'Felino'); 
    this.nombre = nombre;
}


// 4. ESTABLECER LA HERENCIA CON OBJECT.CREATE()
//    Crea un nuevo objeto para Gato.prototype que hereda de Animal.prototype.
Gato.prototype = Object.create(Animal.prototype);

// 5. CORREGIR EL CONSTRUCTOR
//    Establece Gato como la función constructora correcta para las instancias de Gato.
Gato.prototype.constructor = Gato;

// 6. AÑADIR UN MÉTODO PROPIO DE GATO
Gato.prototype.maullar = function() {
    console.log(`${this.nombre} (un ${this.especie}) dice: ¡Miau!`);
};


// 7. PRUEBA Y USO
console.log('--- Prueba de Herencia con Object.create() ---');
const felix = new Gato('Felix');

console.log('Constructor de Felix:', felix.constructor.name); // Salida: Gato (¡Correcto!)
felix.moverse();      // Heredado de Animal.prototype
felix.alimentarse();  // Heredado de Animal.prototype
felix.maullar();      // Propio de Gato.prototype

console.log('¿Felix hereda de Animal?', felix instanceof Animal); // Salida: true
console.log('\n');


//====================================================================
// ALTERNATIVA TEÓRICA CON Object.setPrototypeOf() (No Recomendado)
//
// Object.setPrototypeOf() modifica un objeto existente. Usarlo así es menos
// común y puede tener implicaciones de rendimiento.
//====================================================================

/*
// En este escenario, si tuviéramos un prototipo existente (Gato.prototype),
// podrías usar Object.setPrototypeOf para cambiar su objeto de herencia:

// Esto hace que el objeto Gato.prototype herede directamente de Animal.prototype.
Object.setPrototypeOf(Gato.prototype, Animal.prototype);

// El resultado funcional es similar a Object.create(), PERO
// Object.create() es el estándar para la herencia prototípica porque
// crea una nueva cadena sin modificar los objetos existentes.
*/

console.log('\n\n\n');

//====================================================================
// HERENCIA PROTOTÍPICA CON Object.setPrototypeOf() (Alternativa)
//
// Usaremos Mueble como la clase base (Superclase) y Silla como la subclase.
//====================================================================

// 1. FUNCIÓN CONSTRUCTORA BASE (Superclase)
function Mueble(material) {
    this.material = material || 'Madera';
}

// 2. MÉTODOS COMPARTIDOS EN EL PROTOTIPO DE LA BASE
Mueble.prototype.describir = function() {
    console.log(`Este mueble está hecho de ${this.material}.`);
};

Mueble.prototype.ensamblar = function() {
    console.log(`Ensamblando pieza de ${this.material}...`);
};


// 3. FUNCIÓN CONSTRUCTORA HIJA (Subclase)
function Silla(color) {
    // 3a. Llamamos al constructor padre para inicializar propiedades de la base
    Mueble.call(this, 'Plástico'); // Silla siempre será de Plástico en este ejemplo
    this.color = color;
}


// 4. ESTABLECER LA HERENCIA CON OBJECT.setPrototypeOf()
//    IMPORTANTE: Esto modifica el objeto Gato.prototype *existente* //    para que su [[Prototype]] apunte a Mueble.prototype.

// Esto le dice al objeto Silla.prototype: "Ahora vas a heredar de Mueble.prototype".
Object.setPrototypeOf(Silla.prototype, Mueble.prototype);
                        //{izq herda de derecha}

// 5. CORREGIR EL CONSTRUCTOR (Necesario si se modifica el prototipo)
Silla.prototype.constructor = Silla;


// 6. AÑADIR UN MÉTODO PROPIO DE SILLA
Silla.prototype.sentarse = function() {
    console.log(`Alguien se está sentando en la silla de color ${this.color}.`);
};


// 7. PRUEBA Y USO
console.log('--- Prueba de Herencia con Object.setPrototypeOf() ---');
const sillaOficina = new Silla('Negro');

console.log('Constructor:', sillaOficina.constructor.name); // Salida: Silla
sillaOficina.describir();  // Heredado de Mueble.prototype
sillaOficina.ensamblar();  // Heredado de Mueble.prototype
sillaOficina.sentarse();   // Propio de Silla.prototype

console.log('¿Es una instancia de Mueble?', sillaOficina instanceof Mueble); // Salida: true