/* MATRIZ */
const data = {
    forward: 'Ibrahimovic',
    midfielder: 'Tonali',
    defense: 'Romagnoli',
    goalkeeper: 'Donnarumma',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


/* OBJECT VALUES */

const data = {
    forward: 'Ibrahimovic',
    midfielder: 'Tonali',
    defense: 'Romagnoli',
    goalkeeper: 'Donnarumma',
}

const values = Object.values(data);

console.log(values);
console.log(values.length);

/* PADDING */
const string = 'hello';

console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ---------'));
console.log('food'.padEnd(12, ' ---------'));

/* TRAILING COMMA */
const data = {
    forward: 'Ibrahimovic',
}