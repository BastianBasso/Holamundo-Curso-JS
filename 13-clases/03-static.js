// Ejemplo de métodos estáticos en JavaScript

class Restaurants {
    // Propiedad estática: pertenece a la clase, no a las instancias
    static cantidad = 12;

    // Constructor: se ejecuta al crear una nueva instancia con 'new'
    constructor(name) {
        // Propiedad de instancia: cada objeto tendrá su propio 'name'
        this.name = name;
    }

    // Método de instancia: solo puede ser llamado desde una instancia de la clase
    getTimetable() {
        // Este método accede a los datos de la instancia (this)
        console.log('horario restaurante');
    }

    // Método estático: se declara con 'static' y pertenece a la clase, no a las instancias
    static getRestaurant(id) {
        // Los métodos estáticos no pueden acceder a 'this' de la instancia
        // Se usan para lógica relacionada con la clase, no con un objeto específico
        // Por ejemplo, aquí se puede crear una nueva instancia de Restaurants
        return new Restaurants('BBQ');
    }
}

// Acceso a métodos estáticos:
// Se llama directamente desde la clase, NO desde una instancia
const r = Restaurants.getRestaurant(12); // Correcto

// Acceso a métodos de instancia:
// Se llama desde una instancia creada con 'new'
r.getTimetable(); // Correcto

r.getRestaurant(12); // Incorrecto: getRestaurant es estático y no está disponible en la instancia

/*
Resumen:
- Los métodos estáticos se declaran con 'static' y se llaman desde la clase.
- No pueden acceder a las propiedades de instancia (this).
- Son útiles para funciones utilitarias o de fábrica, como crear nuevas instancias.
- Los métodos de instancia se llaman desde objetos creados con 'new' y pueden acceder a los datos de la instancia.*/