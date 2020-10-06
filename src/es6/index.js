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

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);