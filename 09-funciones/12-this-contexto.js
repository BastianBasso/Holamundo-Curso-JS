// Los contextos de this

const user ={
    nombre: 'Nicolas',
    ciudadanias: ['Chile','Colombia','New Zealand'],
    mostrarCiudadanias(){
       //console.log(this.ciudadanias);
       this.ciudadanias.forEach(element => {
            console.log(this.nombre, "tiene la ciudadania de",element);
       });
    }
}
// Las fat arrow function no tienen un concepto de this 

user.mostrarCiudadanias();