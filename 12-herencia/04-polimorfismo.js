// tomar forma en particular en una situacion en particular

function Select() {}

Select.prototype.render = function() {
    return '<select></select>';
}

function Checkbox() {}

Checkbox.prototype.render = function() {
    console.log('renderizando checkbox');
}
let componentes = [
    new Select(),
    new Checkbox(),
];
  
componentes.forEach(c => c.render());
// Polimorfismo en JavaScript significa que diferentes objetos pueden compartir el mismo método (en este caso, 'render'),
// pero cada uno puede tener su propia implementación. Así, al recorrer el arreglo 'componentes' y llamar a 'render()'
// en cada elemento, cada objeto responde de manera diferente según su tipo. Esto permite tratar a los objetos de forma
// uniforme, pero obteniendo comportamientos específicos según la clase o función constructora de cada uno.