function ordenar (texto,fn){
    let texto2 = texto.replace(" ",'').toLowerCase();

    let cadenaNueva= texto2.split('');

    cadenaNueva = cadenaNueva.sort((a,b) => {
        let alower = a;
        let blower = b;
        if (alower<blower) {
            return -1;
        }
        if (alower>blower) {
            return 1;
        }
        return 0;

    });
    let texto_r= cadenaNueva.join('');

    fn(texto_r);
}

ordenar('Hola Mundo', console.log);

