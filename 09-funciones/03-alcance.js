let afuera = 'estoy afuera';

function alcance() {
    console.log(afuera); // Este es el segundo estory fuera
    afuera = 'estoy dentro'; // Modifica la variable global 'afuera'
    function saludo() {} // Declaración de función, solo accesible dentro de alcance()
    var vieja = 'ya no usar'; // var tiene alcance de función (solo dentro de alcance)
    let variable = 'Hola mundo'; // let tiene alcance de bloque (solo dentro de alcance)
    const constante = 'Hola Mundo!'; // const igual, solo dentro de alcance
}

console.log(afuera); // 'estoy afuera'
alcance();
console.log(afuera); // 'estoy dentro'