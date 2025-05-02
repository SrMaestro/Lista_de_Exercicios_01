//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.


const prompt = require('prompt-sync')();
let lista = [];
let n;
let soma = 0

do {
    n = prompt('Digite um número decimal (0 para sair): ');

    if (!n.includes('.') && n !== '0') {
        console.log('Por favor, insira um número decimal válido.');
        continue;
    }

    n = parseFloat(n); // Converte para número decimal

    if (n !== 0) {
        lista.push(n);
    }

} while (n !== 0);

for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
    
}

soma = soma/lista.length;

console.log(`A média aritmética dos números digitados é ${soma}`);
