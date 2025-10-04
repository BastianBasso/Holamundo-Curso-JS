class User  {
    constructor (name) {
        this.name = name;
    }
    save () {
        console.log('Guardando datos en el usuario');
    }
}

class Actualizar {
    update(name) {
        console.log('Actualizando la entidad');
        
    }
}

class Entidad {
    save() {
        console.log('Guardando desde entidad');
        
    }
}
// componer 2 objetos ::
const nuevoProto = Object.assign({},Entidad,Actualizar);


Object.setPrototypeOf(User.prototype , nuevoProto);

const u = new User('chanchito');
u.save();
// no se logro componer de manera existosa