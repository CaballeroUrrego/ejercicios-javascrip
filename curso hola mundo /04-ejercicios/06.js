/**
 * crear algoritmo que devuekva cantidad de numeros 
 * positivos de un array
 */
let array =[2, 5, 7, 15, -5, -100, 55];

function getPositivos(arr){
    let contador = 0;
    for(numero of arr){
        if(numero > 0){
            contador++;
        }
    }
    return contador;
}
let resultado = cuantosPoositivos(array);
console.log(resultado);
