// Ejemplo de Method Override (Sobrescritura de Métodos) en JavaScript con clases

// Clase base (superclase)
class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }

    // Método que puede ser sobrescrito por las subclases
    save() {
        console.log(`Guardando entidad con id: ${this.id}`);
    }
}

// Clase derivada (subclase) que hereda de Entidad
class User extends Entidad {
    constructor(name) {
        // Llamada a super() para inicializar las propiedades de la clase base
        // Es obligatorio pasar los argumentos requeridos por el constructor de la superclase (id en este caso)
        super(255); // Aquí se pasa el id fijo 255 como ejemplo
        this.name = name;
    }

    // Sobrescritura (override) del método save() de la clase base
    save() {
        // Puedes agregar lógica propia y también llamar al método original si lo deseas
        console.log(`Guardando usuario: ${this.name} con id: ${this.id}`);
        // Si quieres llamar al método de la clase base, usa super.save();
        // super.save();
    }
}

// Ejemplo de uso:
const usuario = new User("Bastián");
usuario.save(); // Llama al método sobrescrito en User, NO al de Entidad

/*
Explicación:
- "Method override" (sobrescritura de métodos) ocurre cuando una subclase define un método con el mismo nombre que uno de su superclase.
- Al llamar a ese método desde una instancia de la subclase, se ejecuta la versión de la subclase.
- Puedes seguir accediendo al método original usando super.metodo().
*/