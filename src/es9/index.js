/* STANDBY OPERATOR */
const obj = {
    name: 'jose',
    age: 23,
    country: 'VE',
};

let { name, ...all } = obj;
console.log(all);

/* PROPAGATION OPERATORS */
const obj = {
    name: 'jose',
    age: 23,
};

const obj1 = {
    ...obj,
    country: 'VE',
};

console.log(obj1);

/* PROMISE .FINALLY */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

/* REGEX */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(day, month, year);