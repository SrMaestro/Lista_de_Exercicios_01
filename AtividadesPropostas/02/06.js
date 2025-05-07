let numeroSorteado =  Math.floor(Math.random() * 5) + 1;
const prompt = require('prompt-sync')({ sigint: true });

let n = 0;

while (numeroSorteado != n) {
     n = parseInt(prompt("Digite um número inteiro positivo: "));

}

console.log("Voce acertou");


    
