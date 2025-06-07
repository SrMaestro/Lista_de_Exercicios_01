const prompt = require('prompt-sync')({ sigint: true });
let  anosFumando = Number(prompt('Quantos anos você fumou? '));
let cigarrsosPorDia = Number(prompt('Quantos cigarros você fuma por dia? '));
let cigarrosTemp = 10

let diasFumando  = (anosFumando * 365);
let cigarrosFumados = (cigarrsosPorDia * diasFumando);
let tempoDeEmMinutosDeCigarrosFumados = (cigarrosFumados * cigarrosTemp);
let tempoEmDias = (tempoDeEmMinutosDeCigarrosFumados / 1440);


console.log(`Você fumou ${cigarrosFumados} cigarros, o que equivale a ${tempoEmDias.toFixed(2)} dias de vida perdidos.`); 
