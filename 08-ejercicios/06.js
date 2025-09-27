function dividePorTipo(arr) { 

    
// // des anidar un array 
// const anidado = [[1, 2], 3, [4, 5]];
// const plano = anidado
//     .reduce((acc, el) => acc.concat(el), []);// concat será el numero que se evalua
// console.log(plano);
    return{
        boolean : arr.reduce((acc, el)=>{ 
            if (typeof el === "boolean"){
                return acc.concat(el);
            }
            return acc;
        }, []),
        number:arr.reduce((acc, el)=>{ 
            if (typeof el === "number"){
                return acc.concat(el);
            }
            return acc;
        }, []),
        object:arr.reduce((acc, el)=>{ 
            if (typeof el === "object"){
                return acc.concat(el);
            }
            return acc;
        }, []),
        string:arr.reduce((acc, el)=>{ 
            if (typeof el === "string"){
                return acc.concat(el);
            }
            return acc;
        }, []),
    };
}

const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    { id: 15 },
    ['lala'],
]

let arr = dividePorTipo(miArray);
console.log(arr);