// Las funciones son objetos (de primera clase) en Js
function Usuario(nombre) {
    this.nombre = nombre;
    this.tipo = "Usuario";
}

// 1. console.log(Usuario.name);
//Se pueden acceder a las propiedaes de este objeto/funcion 
console.log(Usuario.name);
console.log(Usuario.length);

// 3. let user = new Usuario('Nicolas');
// Crea una nueva instancia de objeto 'Usuario' y le pasa un argumento.
// La palabra clave 'new' crea un nuevo objeto y asigna sus propiedades.
let user = new Usuario('Nicolas');
console.log(user);
// El resultado es un objeto: { nombre: 'Nicolas', tipo: 'Usuario' }

// 4. El patrón 'of' o "función de fábrica"
function of(Fn, arg) {
    return new Fn(arg);
}// Se pasa una funcion a otra funcion como argumento 


let user1 = of(Usuario, 'Chanchito');
console.log(user1);
// El resultado es un objeto: { nombre: 'Chanchito', tipo: 'Usuario' }



// Funcion de orden superior :::

// La función 'returned' es una "función de orden superior" porque
// su propósito es devolver otra función.
function returned() {
    // Cuando se llama a 'returned()', lo que realmente hace es ejecutar
    // el código dentro de esta función, que en este caso es devolver la
    // siguiente función anónima.
    return function () {
      // Este es el código de la función que se devuelve.
      // No se ejecuta inmediatamente, solo se define.
      console.log('Hola Mundo');
    };
  }
  
  // 1. let saludo = returned();
  //
  // Aquí, la función 'returned' se llama con los paréntesis ().
  // El motor de JavaScript ejecuta 'returned()' y toma el valor que se devuelve.
  // Como 'returned' devuelve una función, la variable 'saludo'
  let saludo = returned();
  saludo();
  // Esta línea es la que finalmente ejecuta el console.log y muestra el mensaje.


  // Conclucion ::
  // Las funciones son objetos y son objetos de primera clase
  // Asignarlas a otras variables y a otrs constantes
  // Las funciones se pueden pasar como argumento a otras funciones
  // Las funciones pueden ser retornadas en js