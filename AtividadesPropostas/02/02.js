const prompt = require('prompt-sync')();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nRamdom = getRandomInt(1, 10); // Sorteia o número uma vez
let chute;

while (chute !== nRamdom) {
    chute = Number(prompt('Digite um número entre 1 e 10: '));
    // Verifica se o chute é um número válido
     if (isNaN(chute) || chute < 1 || chute > 10) {
        console.log('Por favor, digite um número inteiro entre 1 e 10.');
        continue;
    }
    
    if (chute < nRamdom) {
        console.log('O número é maior que o seu chute.');
    } else if (chute > nRamdom) {
        console.log('O número é menor que o seu chute.');
    } else {
        console.log('Parabéns! Você acertou o número!');
    }
}