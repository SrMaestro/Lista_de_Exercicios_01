const prompt = require('prompt-sync')();

let listaNomes = []

while (listaNomes.length <7) {
    let nome = prompt("Digite seu nome :")
    listaNomes.push(nome)
}
console.log(listaNomes);
