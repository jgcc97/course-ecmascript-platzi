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

newFunction2();
newFunction2('Rodrigo', 23, 'ES');

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

/* OBJECTS STRUCTURE */
let name = 'jose';
let age = 23;

// es5
obj = { name: name, age: age };

// es6
obj2 = { name, age };

console.log(obj);
console.log(obj2);

/*ANONYMOUS FUNCTIONS AND ARROW FUNCTIONS */
const names = [
    { name: 'Theo', age: age },
    { name: 'Romagnoli', age: 25},
    { name: 'Donnarumma', age: 21 },
];

let listOfNames = names.map(function (item) {
   console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age) => {
    console.log(name);
};

const listOfNames4 = name => {
    console.log(name);
};

const square = num => num * num;

/* PROMISE FUNCTIONS */
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true)
        {
            resolve('Hey!');
        }
        else {
            reject('Ops!')
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

/* CLASSES STRUCTURE */
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

console.log(calc.sum(2, 2));

/* MODULES STRUCTURE */
import { hello } from './module.js';

hello();
console.log(hello());

/* GENERATORS STRUCTURE */
function* helloWorld() {
    if (true)
    {
        yield 'Hello, ';
    }
    if (true)
    {
        yield 'World';
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);

console.log(generatorHello.next().value);

console.log(generatorHello.next().value);