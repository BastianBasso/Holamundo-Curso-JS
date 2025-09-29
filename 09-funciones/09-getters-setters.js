// Setters y getters en JavaScript: explicación y ejemplo

// Los getters y setters son métodos especiales en los objetos que permiten
// obtener (get) y modificar (set) propiedades de forma controlada y personalizada.

// Ejemplo:
const usuario = {
    nombre: 'Chanchito',
    apellido: 'Feliz',

    // Getter: permite acceder a usuario.nombreCompleto como si fuera una propiedad
    get nombreCompleto() {
        // Al acceder usuario.nombreCompleto, se ejecuta este método y retorna el string
        return `${this.nombre} ${this.apellido}`;
    },

    // Setter: permite asignar usuario.nombreCompleto = "Nuevo Nombre"
    set nombreCompleto(valor) {
        // Al asignar un valor, se ejecuta este método y actualiza las propiedades internas
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

// Usar el setter para modificar nombre y apellido
usuario.nombreCompleto = "Hola mundo"; // Cambia usuario.nombre y usuario.apellido

// Usar el getter para obtener el nombre completo
console.log(usuario.nombreCompleto); // output: Hola mundo

/*
Explicación:
- El getter se define con la palabra clave 'get' y permite acceder a una propiedad calculada.
- El setter se define con la palabra clave 'set' y permite modificar varias propiedades internas a través de una sola asignación.
- Los getters y setters hacen que el acceso y modificación de datos sea más seguro y flexible, permitiendo validaciones o cálculos automáticos.
- Se usan como si fueran propiedades normales, pero ejecutan*/