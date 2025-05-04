//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')();
let n = Number(prompt('Digite um número: '));


for (let i = n - 1; i > 0; i--) {
    n *= i;
    
}
console.log(`O fatorial é ${n}`);

