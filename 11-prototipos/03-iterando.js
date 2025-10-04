// Ver como iterar las porpiedades de un objeto y su prototipo


function User() {
    this.name = 'Hola Mundo';
}
  
User.prototype.login = function () {
    console.log('Iniciando sesión', this.name);
}
  
let user = new User(); // creando una instancia

for (const prop in user) {
    /*if (Object.prototype.hasOwnProperty.call(user, prop)) {
        const element = user[prop];
        console.log(element);
        
    }*/
    console.log(prop);// se leen todas las propiedades asociadas a USER()
    // propiedades pero solo del mismo nivel

    // como suvir el nivel?
    if (prop.hasOwnProperty('login')) {
        console.log(true);
    } else{
        console.log(false);
    }  
}

console.log('\n\n');
// Este fragmento de código JavaScript se utiliza para iterar sobre las propiedades propias (no heredadas) de un objeto llamado user
for (let prop in user)
    if (user.hasOwnProperty(prop))
      console.log(prop);


console.log('\n\n');



// El HasOwnPropety sirve pero para el nivel del constructor
let a = user.hasOwnProperty('name');// true
let b = user.hasOwnProperty('login');// false
let c = user.hasOwnProperty('toString');// false
console.log(a,b,c); // qed




console.log('\n\n');
// Este código JavaScript itera y muestra solo las propiedades que el objeto user ha heredado de su cadena de prototipos, excluyendo las propiedades que le son propias.
// La diferencia es el '!'
for (let prop in user)
    if (!user.hasOwnProperty(prop))
      console.log(prop);


console.log('\n\n');



let d= Object.keys(user);
//Object.keys() para obtener un array de los nombres de las propiedades propias y enumerables del objeto llamado user.  (Solo del nivel del constructor)
console.log(d);
