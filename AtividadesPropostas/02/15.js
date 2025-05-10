const prompt = require('prompt-sync')();
let controlador = 0;
let vetor = [];

while (controlador < 10) {
    let input = prompt("Digite um número: ");
    let n = Number(input);

    if (!isNaN(n) && input.trim() !== "") {
        console.log("É um número válido!");
        vetor.push(n);
        controlador++; // Só incrementa se o número for válido
    } else {
        console.log("Entrada inválida! Digite apenas números.");
    }
}

console.log("\nNúmeros digitados:", vetor);

// Verificando números pares e suas posições
vetor.forEach((element, index) => {
    element % 2 === 0 
        ? console.log(`Número par: ${element} na posição ${index}`) 
        : void 0;
});