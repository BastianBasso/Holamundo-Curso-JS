function callback(fn, ...rest) { 
    // dentro de la funcion de filter
    return fn(...rest);
}

function log(...args) {
    console.log(args);
}

callback(log, 1, 2, 3, 4);



console.log([1,2,3,4]);
