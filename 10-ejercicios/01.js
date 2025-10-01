const obj = {
    nombre: 'Nicolas',
};

function Extender() { 
    this.logout = function (){
        console.log('Cerrando secion de ',this.nombre);
    }
    this.login = function (){
        console.log('Logeando secion de ',this.nombre);
    }
} 
Extender.call(obj);
console.log(obj);

obj.login();
obj.logout();
