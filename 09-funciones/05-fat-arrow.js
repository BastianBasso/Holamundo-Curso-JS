
// Fat arrow functions no tienen arguments
// tampoco cuentan con super, this
const suma = (a, b) => {
    return Array.from(arguments)
        .reduce((acc, el) => acc + el, 0);
}
console.log(suma(1, 2, 3, 4)); // 10

// no escribirla fat arrow funcion en el contexto de this arguments o super