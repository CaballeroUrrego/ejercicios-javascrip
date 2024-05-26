/**
 * Crear un algoritmo que tome un array de objetos
 * y devuelva un array de pares
 */
let array = [
    {
        id: 1,
        name: 'sebastian',
    },
    {
        id: 2,
        name: 'Caballero',
    },
    {
        id: 3,
        name: 'yolima',
    }
];

function toPairs(arr) {
    let pairs = [];
    for (let idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);  // Debería imprimir [[1, {id: 1, name: 'sebastian'}], [2, {id: 2, name: 'Caballero'}], [3, {id: 3, name: 'yolima'}]]
