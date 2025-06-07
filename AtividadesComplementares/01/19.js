//Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS

function formataHora (numero) {
    const str = numero.toString().padStart(6, '0');
    const HH = str.slice(0, 2);
    const MM = str.slice(2, 4);
    const SS = str.slice(4, 6);
    return `${HH}:${MM}:${SS}`;
    
}

let i = 0
const prompt = require('prompt-sync')();

while (i < 5) {
    let horario = Number(prompt("Digite o horario "))
    console.log(formataHora(horario));
    i++
    
}