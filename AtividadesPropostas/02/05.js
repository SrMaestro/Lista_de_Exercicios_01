const prompt = require('prompt-sync')({ sigint: true });

let escolha1 = parseInt(prompt('Escolha pedra, papel ou tesoura (1, 2 ou 3): '));
let escolha2 = parseInt(prompt('Escolha pedra, papel ou tesoura (1, 2 ou 3): '));

if (escolha1 === escolha2) {
    console.log('Empate!');
} else if (escolha1 === 1 && escolha2 === 2) {
    console.log('Jogador 2 ganhou!');
} else if (escolha1 === 1 && escolha2 === 3) {
    console.log('Jogador 1 ganhou!');
} else if (escolha1 === 2 && escolha2 === 1) {
    console.log('Jogador 1 ganhou!');
} else if (escolha1 === 2 && escolha2 === 3) {
    console.log('Jogador 2 ganhou!');
} else if (escolha1 === 3 && escolha2 === 1) {
    console.log('Jogador 2 ganhou!');
} else if (escolha1 === 3 && escolha2 === 2) {
    console.log('Jogador 1 ganhou!');
} else {
    console.log('Escolha inválida!');
}