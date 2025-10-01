function suma(fn, ...rest) { 
    let resultado =  rest.reduce((a,b)=>a+b,0);
    fn(resultado);
}

suma(resultado => {
    console.log(resultado);
}, 1, 2, 3, 4);



