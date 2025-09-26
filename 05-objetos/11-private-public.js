function Usuario(){
    let id=1;
    this.name = 'Nicolas';
    let log = function(){
        console.log('logging...');
    }
    // variables y funciones definidas dentro de el cosnntructor de objetos obtienen el ambito de privado y son inaccesibles desde fuera
    this.guardar = function (){
        console.log('Guardando...');
    }
}
// usando una funcion constructor para poder crear los  objetos ::

const usuario = new Usuario();
console.log(usuario);

