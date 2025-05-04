const prompt = require('prompt-sync')();
let limite  = 5
const numeros = [];
let soma = 0;


while (limite > 0) {
    let n = Number(prompt('Digite um número: '));
    numeros.push(n);
    if (n < 0) {
        console.log('Número inválido!');
        break;
    }
    limite = limite - 1;
    // console.log(`O número digitado foi ${n}`);
}

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];

}

console.log(`A soma dos números digitados é ${soma}`);