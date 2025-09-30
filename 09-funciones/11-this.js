// La palabra reservada 'this' en JavaScript
// Las fat arrow function no tienen un concepto de this



// 'this' hace referencia al objeto desde el cual se está llamando el código actual.
// Su valor depende de cómo se invoca la función, no de dónde está definida.

console.log("-------------------------------------------------");
// 1. 'this' dentro de un método de objeto
const user = {
    name: 'Nicolas',
    login() {
        console.log(this); // 'this' apunta al objeto 'user'
    }
};

user.login(); // output: { name: "Nicolas", login: f }

// Si agregamos otro método, 'this' sigue apuntando al objeto donde se llama
user.logout = function () {
    console.log(this); // 'this' apunta a 'user'
};
user.logout(); // output: { name: "Nicolas", login: f, logout: f }

console.log("-------------------------------------------------");
// 2. 'this' en una función normal (no método, no flecha)

function log() {
    console.log(this);
}
log(); // En modo no estricto, 'this' es el objeto global (window en navegador, global en Node.js)
// output: Window  http://127.0.0.1:5500/index.html (en navegador)


console.log("-------------------------------------------------");
// 3. 'this' en funciones constructoras (usando 'new')
function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
}
/*
Cuando usas 'new Log("Hola mundo")':
    - Se crea un nuevo objeto vacío.
    - 'this' dentro de la función apunta a ese nuevo objeto.
    - Se asignan las propiedades al nuevo objeto.
    - Si la función no retorna nada, retorna el nuevo objeto por defecto.
*/
const l = new Log('Hola mundo'); // output: Log { mensaje: "Hola mundo" }

// Resumen de reglas de 'this':
// - En un método de objeto: 'this' es el objeto que llama al método.
// - En una función normal: 'this' es el objeto global (window/global), o undefined en modo estricto.
// - En una función constructora (con 'new'): 'this' es el nuevo objeto creado.
// - En funciones flecha: 'this' se hereda del contexto donde fue definida (no tiene su propio 'this').

// Nota: El valor de 'this' puede cambiar dependiendo de cómo se invoque la función (por ejemplo, usando call,