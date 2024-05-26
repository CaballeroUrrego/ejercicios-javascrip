/**
 * indice validar qque no sea menor a cero y que el elemento exisa en el array
 */
function getbyIdx(arr, idx){
if (idx <0|| arr.length <= idx){
return 'elemento no existe' ;
}
return arr[idx];
}




let resultado = getbyIdx ([1, 2],0);
console.log (resultado);