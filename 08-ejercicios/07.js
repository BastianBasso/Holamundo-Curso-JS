
const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

function groupBy(arr, prop) {
    return arr.reduce((acc,el)=>{
        let valor = el[prop];
        acc[valor] = acc[valor] ? acc [valor] : [];//no entiendo esto deveria analizarlo fase por fase
        acc[valor].push(el);
        return acc;
    },{});
}
// no lo entiendo del todo esto



const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });