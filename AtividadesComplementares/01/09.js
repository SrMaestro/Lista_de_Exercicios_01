

const prompt = require('prompt-sync')();

let somaSalarioMasculino = 0
let somaSalarioFeminino = 0

do {
    let salario = Number(prompt('Digite seu salário: '));
    let sexo = prompt('Digite seu sexo (homem/mulher): ').toLowerCase();

    switch (sexo) {
        case 'homem':
            console.log('Salario computado para os homens.');
            somaSalarioMasculino += salario
            break;

        case 'mulher':
            console.log('Salario computado para as mulheres .');
            somaSalarioFeminino += salario
            break;

        default:
            console.log('Sexo inválido. Digite "homem" ou "mulher".');
            break;
    }

    let continuar = prompt('Deseja continuar? (s/n): ').toLowerCase();
    if (continuar !== 's') {
        console.log('Programa encerrado.');
        break;
    }

} while (true);

console.log(somaSalarioMasculino);
console.log(somaSalarioFeminino);

