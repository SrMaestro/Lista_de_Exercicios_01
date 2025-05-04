// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if


const prompt = require('prompt-sync')();
console.log('========================================================');
console.log('||           🌟 ATIVIDADE 03 - CLASSIFICAR NOTA 🌟  ||');
console.log('========================================================');

let nota = Number(prompt('Digite a nota (0 a 10): '));

if (nota >= 0 && nota < 4) {
    console.log('Reprovado!');
}else if (nota >= 4 && nota < 7) {
    console.log('Recuperação!');
}else{
    console.log('Aprovado!');
    
}