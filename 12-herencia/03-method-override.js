function Entidad() {}

Entidad.prototype.save = function () {
  console.log('guardando desde entidad...');
}

function User() {}

// method override 
// anular el metodo
// El "method override" (anulación de métodos) en JavaScript permite que una subclase o función constructora hija
// defina un método con el mismo nombre que uno heredado de su prototipo o clase padre. De esta forma, cuando se
// llama al método desde una instancia de la subclase, se ejecuta la versión redefinida en la subclase y no la del padre.
// Esto es útil para personalizar o extender el comportamiento heredado, manteniendo la estructura de herencia y reutilización de código.
User.prototype.save = function () {
    console.log('Guardando desde User...');
}


Object.setPrototypeOf(User.prototype, Entidad.prototype);

// El problema es que en este caso se guardo los datos en un archivo de texto  y no en la base de datos 





const u = new User();

console.log(Object.getPrototypeOf(u));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(u)).save());
