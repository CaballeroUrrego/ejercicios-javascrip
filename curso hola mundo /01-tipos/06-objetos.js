// mi gato y mi objeto literal 



let nombre = "lucius";
let anime = " locos "
let edad = 2 ;

let personaje = {
nombre,
anime,
edad,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;



let llave ='edad';
personaje['edad'] = 16;

delete personaje.anime;
console.log(personaje);

