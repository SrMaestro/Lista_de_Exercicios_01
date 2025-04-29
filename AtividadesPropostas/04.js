// . Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();
console.log('========================================================');
console.log('||           🌟 ATIVIDADE 04 - MENU INTERATIVO 🌟  ||');
console.log('========================================================');
console.log('||                Escolha uma opção:                  ||');
console.log('||                1. Opção 1                          ||');
console.log('||                2. Opção 2                          ||');
console.log('||                3. Opção 3                          ||');
console.log('========================================================');

let escolha = Number(prompt('Digite o número da opção desejada: '));
let continua = 'S';

do {
    switch (escolha) {
        case 1:
            console.log('Você escolheu a Opção 1!');
            break;
        case 2:
            console.log('Você escolheu a Opção 2!');
            break;
        case 3:
            console.log('Você escolheu a Opção 3!');
            break;
        default:
            console.log('Opção inválida!');
            break;
    }

    continua = String(prompt('Deseja escolher outra opcao? (S/N): '));

    if (continua == 'S' || continua == 's') {
        console.log('========================================================');
        console.log('||           🌟 ATIVIDADE 04 - MENU INTERATIVO 🌟  ||');
        console.log('========================================================');
        console.log('||                Escolha uma opção:                  ||');
        console.log('||                1. Opção 1                          ||');
        console.log('||                2. Opção 2                          ||');
        console.log('||                3. Opção 3                          ||');
        console.log('========================================================');

        // Reutilize a variável já declarada
        escolha = Number(prompt('Digite o número da opção desejada: '));
    }
} while (continua != 'N' && continua != 'n');