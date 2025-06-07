const prompt = require('prompt-sync')();

const a = parseFloat(prompt('Digite o valor do lado A: '));
const b = parseFloat(prompt('Digite o valor do lado B: '));
const c = parseFloat(prompt('Digite o valor do lado C: '));

if (a + b > c && a + c > b && b + c > a) {
    console.log('Os lados formam um triângulo.');

    if (a === b && b === c) {
        console.log('O triângulo é equilátero.');
    } else if (a === b || a === c || b === c) {
        console.log('O triângulo é isósceles.');
    } else {
        console.log('O triângulo é escaleno.');
    }
} else {
    console.log('Os lados não formam um triângulo.');
}