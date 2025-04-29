// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.


const prompt = require('prompt-sync')();

console.log('========================================================');
console.log('||               ATIVIDADE 01 - PAR OU ÍMPAR          ||');
console.log('========================================================');
console.log('||                Verifique se um número é            ||');
console.log('||                   PAR ou ÍMPAR                     ||');
console.log('========================================================');

let continua = 'S';
do {
    let n1 = Number(prompt('Digite um numero: '));

    if (n1 % 2 == 0) {
        console.log('O número ' + n1 + ' é par!');
    } else {
        console.log('O número ' + n1 + ' é ímpar!');
    }
    continua = String(prompt('Deseja continuar? (S/N): '))

    if(continua != 'S' && continua != 'N' && continua != 's' && continua != 'n') {
        console.log('Opção inválida!');
        continua = String(prompt('Deseja continuar? (S/N): '))
    }


} while (continua != 'N' && continua != 'n'); 