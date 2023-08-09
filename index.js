const { uniq } = require('lodash');
const { arrayNumeros, arrayLetras } = require('./array');

console.log(arrayNumeros);
console.log(arrayLetras);

const arrayNumerosFiltrado = uniq(arrayNumeros);
const arrayLetrasFiltrado = uniq(arrayLetras);

console.log(arrayNumerosFiltrado);
console.log(arrayLetrasFiltrado);