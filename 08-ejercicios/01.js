function paraAbsoluto(arr){

    // return Math.abs(arr);
    return arr.map((arr)=>Math.abs(arr));
}
const ns = [-2, 3, 5, -15];
const absolutos = paraAbsoluto(ns);
console.log(absolutos);