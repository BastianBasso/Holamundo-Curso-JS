const obj = {
    nombre: 'Nicolas',
};

function extender(usuario) {
    
    usuario.logout = ()=>{
        console.log('Cerrando secion de ',usuario.nombre);
    }
    usuario.login = ()=> {
        console.log('Logeando secion de ',usuario.nombre);
    }
    //console.log(usuario.login());
    return usuario;
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();


//---------------------------------------
// Solución del profe

const obj2 = {
    nombre: 'Nicolas', 
};

function extender2(usuario) {
    // Definimos un objeto 'metodos' con dos métodos: login y logout
    const metodos = {
        // Ambos métodos usan 'this' para acceder a la propiedad 'nombre'
        login() {
            // 'this' aquí hace referencia al objeto que llama al método (usuario extendido)
            console.log('Iniciando sesión', this.nombre);
        },
        logout() {
            // Igual, 'this' hace referencia al objeto que llama al método
            console.log('Cerrando sesión', this.nombre);
        },
    };
    
    // Object.assign copia las propiedades de 'metodos' al objeto 'usuario'
    // Así, los métodos quedan ligados al objeto usuario y 'this' apunta correctamente
    return Object.assign(usuario, metodos);
}

// Creamos un nuevo objeto extendido con los métodos login y logout
const usuario2 = extender2(obj2);

console.log(usuario2); // Muestra el objeto extendido con los métodos

usuario2.login(); // output: Iniciando sesión Nicolas
// Al llamar usuario2.login(), 'this' dentro de login() apunta a usuario2,
// por lo que this.nombre es 'Nicolas'.
// Esto funciona porque los métodos se agregan directamente al objeto y
// la referencia de 'this' se mantiene correctamente.
// No se rompe la línea contextual de 'this' porque los métodos son llamados
// como propiedades del objeto (usuario2.login()), no como funciones sueltas.