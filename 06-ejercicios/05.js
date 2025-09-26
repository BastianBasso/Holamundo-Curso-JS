// Propiedad existente

let objeto ={
    id:1,
    name: 'chanchito',
    login: function (){},
    logout: function (){},
}

function tieneProp (obj,propiedad){
    for (let key in obj){
        if(key === propiedad ){
            return true;
        }
    }
    return false;
}

let propiedad= 'name';

console.log(tieneProp (objeto,propiedad));
