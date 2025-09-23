// adivinar edad


let miEdad = 24 ;
let edadAmigo = 26 ; 

if (miEdad === edadAmigo){
    console.log('Edades iguales');
} else if (miEdad > edadAmigo){
    console.log('Tienes una edad MaYor');
} else if (miEdad < edadAmigo){
    console.log('Tienes una edad MeNor ');
}

let diferenciaEdad =  (miEdad -edadAmigo);
if (diferenciaEdad<0){
    diferenciaEdad=diferenciaEdad*-1;
}

console.log(diferenciaEdad>=5?"LA diferncia de edad es mayor o igual a 5 años": "La diferncia de edad es menor a 5 años");

console.log(diferenciaEdad);

