/**
 * Crear un algoritmo que devuelva un array de objetos 
 * en base a pares 
 */
let pairs = [
    [1, { name: 'sebastian' }],
    [2, { name: 'Caballero' }],
    [3, { name: 'Urrego' }]
];

function toCollection(arr) {
    let collection = [];
    for (let idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado); 
// Debería imprimir [{id: 1, name: 'sebastian'}, {id: 2, name: 'Caballero'}, {id: 3, name: 'Urrego'}]
