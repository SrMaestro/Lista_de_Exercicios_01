// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

prompt = require('prompt-sync')();

let frase = "Banan com cafezinho e bolo com cafezinho";
let palavras = frase.split(" ");
let arrayPalavras = [];

for (let i = 0; i < palavras.length; i++) {
    // Se a palavra ainda não está no array, adiciona
    if (!arrayPalavras.includes(palavras[i])) {
        arrayPalavras.push(palavras[i]);
    } else {
       
    }
}

console.log(arrayPalavras);