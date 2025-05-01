const prompt = require('prompt-sync')();

let maca = prompt('Quantas maçãs você comprou? ');
let preco = 0.30;

if (maca >= 12) {
    preco = 0.25;
}

console.log(`O total a pagar é R$${(maca * preco).toFixed(2)}`);
