
function preciocompleto(precio,impuesto){
    return (precio*(1+impuesto)).toFixed(2);
}

let resultado = preciocompleto(19.90, 0.15);

console.log(resultado);
