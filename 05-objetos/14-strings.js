// El tipo primitivo string se puede crear con comillas simples o dobles
let texto = "Hola mundo";
let otroTexto = 'JavaScript';

// El constructor String crea un objeto tipo String
let textoObjeto = new String("Hola mundo");

// Diferencias entre string primitivo y objeto String
typeof texto;        // "string"
typeof textoObjeto;  // "object"

// Ambos pueden usar métodos de String  , ojo esto es raro 
texto.length;              // 10
textoObjeto.length;        // 10
texto.charAt(0);           // "H"
textoObjeto.charAt(0);     // "H"

// Comparación entre primitivo y objeto
texto == textoObjeto;      // true (comparación de valor)
texto === textoObjeto;     // false (comparación estricta: tipos diferentes)

// Puedes agregar métodos al prototipo de String
String.prototype.saludar = function() {
    return "¡Hola, " + this + "!";
};
console.log("Mundo".saludar()); // "¡Hola, Mundo!"

// El constructor String rara vez se usa directamente, pero es útil para:
// - Crear objetos String cuando necesitas propiedades adicionales
// - Extender el prototipo de String para todos los strings

// Ejemplo de uso del constructor para crear un objeto String
let miString = new String("Ejemplo");
miString.propiedadExtra = "Valor adicional";
console.log(miString.propiedadExtra); // "Valor adicional"


console.log('#########');



// Métodos útiles del objeto String:

let saludo = "Hola Mundo";

// .includes(substring)
// Verifica si el string contiene el substring dado (devuelve true o false)
console.log(saludo.includes(" Mundo")); // true

// .replace(valorBuscado, nuevoValor)
// Reemplaza la primera ocurrencia de valorBuscado por nuevoValor
let nuevoSaludo = saludo.replace("Mundo", "Nicolas");
console.log(nuevoSaludo, saludo); // "Hola Nicolas", "Hola Mundo"

// Convierte todo el string a minúsculas
console.log(saludo.toLowerCase()); // "hola mundo"
// Convierte todo el string a mayúsculas
console.log(saludo.toUpperCase()); // "HOLA MUNDO"

// .substring(inicio, fin)
// Devuelve una parte del string desde el índice 'inicio' hasta 'fin' (sin incluir 'fin')
// Si no se pasan argumentos, devuelve el string completo
console.log(saludo.substring(0, 4)); // "Hola"

// .substr(inicio, longitud)
// Devuelve una parte del string desde el índice 'inicio' y con la cantidad de caracteres indicada por 'longitud'.
// ¡OJO! Este método está deprecado, se recomienda usar .substring() o .slice() en su lugar.
console.log(saludo.substr(2, 4)); // Ejemplo: "la M"

// Métodos para eliminar espacios en los extremos de un string:

const espacios = "   Hola   Mundo!   ";

// .trim()
// Elimina los espacios en blanco al inicio y al final del string.
console.log(espacios.trim()); // "Hola   Mundo!"

// .trimStart()
// Elimina los espacios en blanco solo al inicio del string.
console.log(espacios.trimStart()); // "Hola   Mundo!   "

// .trimEnd()
// Elimina los espacios en blanco solo al final del string.
console.log(espacios.trimEnd()); // "   Hola   Mundo!"