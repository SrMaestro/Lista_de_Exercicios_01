//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')();

console.log('========================================================');
console.log('||           🌟 ATIVIDADE 05 - CÁLCULO DO IMC 🌟          ||');
console.log('========================================================');
console.log('||      Descubra seu Índice de Massa Corporal (IMC)    ||');
console.log('||          e sua categoria de peso correspondente    ||');
console.log('========================================================');

let continua = 'S';

do {
    // Solicita peso e altura do usuário
    const peso = Number(prompt('Digite seu peso (em kg): '));
    const altura = Number(prompt('Digite sua altura (em metros): '));

    // Calcula o IMC
    const imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    // Determina a categoria de peso
    if (imc < 18.5) {
        console.log('Categoria: Baixo peso');
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log('Categoria: Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
        console.log('Categoria: Sobrepeso');
    } else {
        console.log('Categoria: Obesidade');
    }

    // Pergunta se o usuário deseja continuar
    continua = String(prompt('Deseja calcular outro IMC? (S/N): '));

    if (continua != 'S' && continua != 'N' && continua != 's' && continua != 'n') {
        console.log('Opção inválida!');
        continua = String(prompt('Deseja calcular outro IMC? (S/N): '));
    }

} while (continua != 'N' && continua != 'n');

console.log('Programa encerrado. Obrigado por usar o cálculo de IMC!');