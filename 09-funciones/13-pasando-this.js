function saludar(...rest){
    console.log(this, rest);
}
// como cambiar el contexto de window?


// 3 formas de cambiar le contexto de this:::.>>

saludar.call({propiedad:'hola ,mundo',},1,5);

// la uncia diferenci entre aply y call es que en aplly tengo que pasar los otros argumentos como array 
saludar.apply({propiedad:'hola ,mundo',},[1,5]);

// bind solo sirve para cambiarle el contexto a this
saludar.bind({propiedad:'hola ,mundo',}) (1,5);
// Ojo con la sintaxis de esto  que es raro 
// ojo se crea una funcion de una forma rara que no comprendo?
//nuevoSaludar(1,5);



// otra forma incluso mas rara e incomprensible
(function saludar2(...rest) {
    console.log(this, rest);
}).bind({ propiedad: 'hola mundo' })(1, 2);