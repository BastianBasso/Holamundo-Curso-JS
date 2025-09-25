// Definimos un objeto llamado 'user' usando la sintaxis de "objeto literal".
// Los objetos son colecciones de propiedades, donde cada propiedad es un par 'clave: valor'.
let user = {
    // Las propiedades pueden tener valores de diferentes tipos de datos primitivos.
    email: "namatanerv@gmail.com", // string
    name: 'Namata', // string
    activo: true, // boolean
  
    // Un objeto puede contener otro objeto. Esto es un 'objeto anidado'.
    // Es útil para agrupar datos relacionados, como la dirección del usuario.
    direccion: {
      ciudad: 'Loquendo city',
      calle: 'Zootopia',
      numero: 325,
    },
  
    // Una propiedad también puede ser una función. Cuando una función es una
    // propiedad de un objeto, se le llama "método".
    // Esto es una "función anónima" asignada a la clave 'recuperarClave'.
    recuperarClave: function() {
      console.log('Recuperando clave...');
    },
  
    // Desde ES6 (la versión de JavaScript de 2015), existe una sintaxis
    // más corta para definir métodos, que es la forma moderna de hacerlo.
    enviarMensaje() {
      console.log('Enviando mensaje...');
    },
  
    // Usando el método 'this' para acceder a otras propiedades del objeto.
    // 'this' se refiere al objeto actual ('user' en este caso).
    // Esto evita tener que escribir 'user.name' y hace que el código sea más reutilizable.
    saludar() {
      console.log(`Hola, mi nombre es ${this.name}.`);
    },
  
    // Un método puede tomar argumentos, igual que una función normal.
    actualizarEstado(nuevoEstado) {
      this.activo = nuevoEstado;
      console.log(`Estado actualizado a: ${this.activo}`);
    }
  };


console.log(user['name']);
user.recuperarClave();
user.saludar();
user.actualizarEstado(false);


// cambiar valores a propiedad en especifico
user.name = 'Bastián';
console.log(user.name);


/*
  Nota sobre el uso de this:

this se utiliza para hacer referncia al objeto que poseee la funcion
  saludar() {
      console.log(`Hola, mi nombre es ${this.name}.`);
    },
this-> hace referncia al objeto user
*/
