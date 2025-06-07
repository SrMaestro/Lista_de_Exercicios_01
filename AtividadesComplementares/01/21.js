const prompt = require('prompt-sync')();

function calcularPesoIdeal() {
    let alt = Number(prompt("Digite sua altura (em metros): "));
    let sexo = prompt("Digite seu sexo (masculino/feminino): ").toLowerCase();

    let pesoIdealHomens = (72.7 * alt) - 58;
    let pesoIdealMulheres = (62.2 * alt) - 44.7;

    if (sexo === "masculino") {
        console.log(`Seu peso ideal é ${pesoIdealHomens.toFixed(2)} kg`);
    } else if (sexo === "feminino") {
        console.log(`Seu peso ideal é ${pesoIdealMulheres.toFixed(2)} kg`);
    } else {
        console.log("Sexo não reconhecido. Digite 'masculino' ou 'feminino'.");
    }
}

calcularPesoIdeal();