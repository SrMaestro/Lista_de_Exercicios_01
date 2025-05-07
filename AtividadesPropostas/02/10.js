const prompt = require('prompt-sync')();
let array = []
let soma 

do {
    let n = Number(prompt('Digite um numero'))
    array.push(n)

    let continuar = prompt('Deseja continuar? (s/n): ').toLowerCase();
    if (continuar !== 's') {
       
        console.log('Programa encerrado.');
        break;
    }

} while (true);



//Somando todos os elementos do array
soma = array.reduce((acc, valor) => acc + valor, 0);
console.log(soma);

// mostrando o menor valor

let menorValor = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < menorValor) {
        menorValor = array[i];
    }
}

console.log('O menor valor é:', menorValor);