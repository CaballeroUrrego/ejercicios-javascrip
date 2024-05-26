/**
 * crear array de longitud N, y que sus elementos sean numeros
 * del 1 hasta N.
 */
let longitude = 7;

function crearArray(n){
    if(n <= 0){
        return [];
    }
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = i + 1;
    }
    return arr;
}
let resultado = crearArray(longitude);

console.log(resultado); // Debería imprimir [1, 2, 3, 4, 5, 6, 7]
