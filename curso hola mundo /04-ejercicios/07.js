/**crear un algirimo
 * que devuelva el 
 * precio mas impuesto
 */



function precioCompleto(precio, impuesto){
 return precio + precio * impuesto;
}
let resultado = precioCompleto(19.90,0.15);
console.log(resultado);