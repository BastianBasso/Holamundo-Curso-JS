function similares(obj1,obj2){
    for ( llave of Object.keys(obj1)) {
        if (obj1[llave] !==  obj2[llave]){
            console.log(obj2[llave]);
            return false;
        }
    }
    return true;
}

let resultado = similares(
    {id:1,name:'Nico'},
    {id:1,name:'Lalo'},
);

console.log(resultado);
