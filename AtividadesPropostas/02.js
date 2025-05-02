// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else

const prompt = require('prompt-sync')();
console.log('========================================================');
console.log('||           🌟 ATIVIDADE 02 - CLASSIFICAR IDADE 🌟  ||');
console.log('========================================================');
console.log('||                Descubra sua categoria              ||');
console.log('||                   com base na idade                ||');
console.log('========================================================');

let continua = 'S';

do {
    let idade  = Number(prompt('Digite sua idade: '));


if (idade >= 0 && idade <= 12) {
    console.log('Você é uma criança!');
}else if (idade >= 13 && idade <= 17) {
    console.log('Você é um adolescente!');
}else if (idade >= 18 && idade <= 59) {
    console.log('Você é um adulto!');
}else if (idade >= 60 && idade <= 120) {
    console.log('Você é um idoso!');
}
else {
    console.log('opcao inválida!');
    console.log('Idade inválida!');
    
}

continua = String(prompt('Deseja continuar? (S/N): '))

if(continua != 'S' && continua != 'N' && continua != 's' && continua != 'n') {
    console.log('Opção inválida!');
    continua = String(prompt('Deseja continuar? (S/N): '))
}



    
} while (continua != 'N' && continua != 'n');