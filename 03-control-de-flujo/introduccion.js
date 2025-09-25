// explciacion del condicional if
//
// se explico if , if else , while ,do while, for of, y switch.

// continue y break:

let i=0;

while (i < 6) {
    i++;
    if (i ==2){
        continue; // continue hace que me salte el console.log, 
        // aka : hace que me vuelva al comienzo
    }
    console.log(i) ;
}


// Variable que queremos evaluar
let codigoDeEstado = 33;

// Usamos el switch para determinar qué mensaje mostrar
switch (codigoDeEstado) {
  // Caso 1: Si codigoDeEstado es 1
  case 1:
    console.log("El pedido está en preparación.");
    break; // Detiene la ejecución del switch aquí

  // Caso 2: Si codigoDeEstado es 2
  case 2:
    console.log("El pedido está en camino.");
    break; // Detiene la ejecución

  // Caso 3: Si codigoDeEstado es 3
  case 3:
    console.log("El pedido ha sido entregado.");
    break; // Detiene la ejecución

  // Si no coincide con ninguno de los casos anteriores
  default:
    console.log("Estado no reconocido. Por favor, contacte a soporte.");
    break; // Buena práctica, aunque es el último bloque
}