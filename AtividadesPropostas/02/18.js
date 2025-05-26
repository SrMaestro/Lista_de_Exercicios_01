

const prompt = require('prompt-sync')();
let registros = []; // Array de objetos

do {
    let nome = prompt("Digite seu nome (ou 'sair' para encerrar):");
    if (nome.toLowerCase() === 'sair') break;

    let salario = Number(prompt("Digite seu salário:"));
    registros.push({ nome, salario }); // Adiciona um objeto ao array
} while (true);

console.log(registros); // Exemplo de saída: [{ nome: "João", salario: 3000 }, ...]