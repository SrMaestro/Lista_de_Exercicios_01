const prompt = require('prompt-sync')();

let primeiroTermo = Number(prompt('Digite o primeiro termo da PA: '));
let razao = Number(prompt('Digite a razão da PA: '));
let quantidadeTermos = 10; // Número de termos a serem exibidos
let soma = 0; // Variável para armazenar a soma dos termos



while (quantidadeTermos > 0) {
    primeiroTermo += razao;
    soma += primeiroTermo; // Adiciona o termo atual à soma
    quantidadeTermos--;
    console.log(`${primeiroTermo}`); // Exibe o termo atual
    
    
}

console.log(`A soma dos termos é: ${soma}`); // Exibe a soma total dos termos
