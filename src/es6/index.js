/* FUCNTIONS'S STRUCTURE */
function newFunction(name, age, country) {
    var name = name || 'jose';
    var age = age || 23;
    var country = country || 'VE';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'jose', age = 23, country = 'VE') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Gabriela', 23, 'IT');

/* CONCATENATION STRUCTURE */
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/* BREAK LINE STRUCTURE */
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat.\n"
+ "Donec eleifend gravida leo, id dapibus sapien dignissim ac. Etiam.";

// es6
let lorem2 = `Aenean auctor cursus nisl vitae pretium.Nullam fermentum magna ut.
Donec eleifend gravida leo, id dapibus sapien dignissim ac. Etiam.
`

console.log(lorem);
console.log(lorem2);

/* DESTRUCTURING STRUCTURE */
let person = {
    'name': 'jose',
    'age': 23,
    'country': 'VE',
}

console.log(person.name, person.age);

let { name, age } = person;

console.log( name, age );

/* SPREAD OPERATOR STRUCTURE */
let team1 = ['Theo', 'Romagnoli', 'Donnarumma'];

let team2 = ['Ibrahimovic', 'Çalhanoğlu', 'Kjaer'];

let acMilan = ['Calabria', ...team1, ...team2];

console.log(acMilan);

/* LET AND VAR STRUCTURE */
{
    var globalVar = 'Globar Var';
}

{
    let globalLet = 'Global Let'

    console.log(globalLet);
}

console.log(globalVar);

/* CONST STRUCTURE */
const a = 'b';

console.log(a);

