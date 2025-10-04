// hay momentos en que es preferible llamar al constructor padre , o ala funcion cosntructora padre para poder reutilizar alguna de susu propiedades
// Falta repaso 


// Definimos un constructor "padre" llamado Entidad
function Entidad(entidad) {
    // Asignamos un id único a cada instancia
    this.id = Math.random().toString(20).slice(2);     
    // Propiedad 'entidad' para identificar el tipo de objeto
    this.entidad = entidad; 
}

// Definimos un constructor "hijo" llamado User
function User(atributosPersonalizados) {
    // Llamamos al constructor padre Entidad, usando call para que 'this' sea el nuevo User
    // Así, User hereda las propiedades definidas en Entidad (id y entidad)
    Entidad.call(this);
    // Definimos propiedades propias de User
    this.attrs = {
        name: "chanchito feliz",
        email: "chacncho@hola.io"
    }
}

// Creamos una instancia de User
const u = new User();
console.log(u); // Mostrará el objeto User con id, entidad (undefined) y attrs