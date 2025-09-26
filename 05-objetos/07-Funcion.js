function Punto (x,y ){
    this.x =x;
    this.y =y;
    this.dibujar= function(){ console.log('Dibujando...');};
}

// otra forma de hacer esto pero usando el constructor de function


// Se pueden crear funciones creando el constructor de Function()
const Point = new Function('x','y',`
    this.x =x;
    this.y =y;
    this.dibujar= function(){ console.log('Dibujando...');};`);
const p = new Point(3,4);
console.log(p, "\n\n\n\n");


// ahora a verlo de otra forma utilizando el metodo Call()
let coord = {z:7};
Punto.call(coord,1,2);
    // Call aumenta los objetos o el detalle del objeto/funcion
// a modo de extender funciones se hace esto: 
console.log(coord);


// Apply() hace lo mismo pero se entrega en formato de array
let corde = {z:49};
Punto.apply(corde,[1,2]);
console.log(corde);