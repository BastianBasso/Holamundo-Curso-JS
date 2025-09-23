
let precioProducto=3500;
let cantidad=15;
let esMiembro= true;

let totalBruto= precioProducto*cantidad;

if (cantidad>10 && precioProducto>50 && esMiembro===true && totalBruto >200) {
    if (cantidad>10 && precioProducto>50){
    totalBruto=totalBruto*0.85;
}
if (esMiembro===true && totalBruto >200) {
    totalBruto=totalBruto*0.90;
}
}
    
console.log(esMiembro ? "Biemvenido denuevom, miembro pagas:"+ totalBruto : "Tu tottal es:"+ totalBruto);

 