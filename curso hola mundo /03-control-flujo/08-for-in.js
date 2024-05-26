let user = {
    id: 1,
    name: 'sebastian',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['zuricato', 'dragon', 'canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}
