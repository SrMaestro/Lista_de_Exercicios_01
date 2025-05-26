const pessoas = [
    { nome: "João", salario: 3500, numeroDeFilhos: 2 },
    { nome: "Maria", salario: 4500, numeroDeFilhos: 1 },
    { nome: "Carlos", salario: 2800, numeroDeFilhos: 0 },
    { nome: "Ana", salario: 6000, numeroDeFilhos: 3 }
];

const initialValue = 0
function calculaMediaSalarios(pessoas) { 
    const somaSalarios = pessoas.reduce((total, pessoa) => {
        return total + pessoa.salario; // Soma o salário de cada pessoa
    }, 0);

    const media = somaSalarios / pessoas.length
    return media

}

function mediaFilhos(pessoas) {
    const somaFilhos = pessoas.reduce((total, pessoa) => {
        return total + pessoa.numeroDeFilhos;
    }, 0);

    const media = somaFilhos / pessoas.length;
    return media;
}


function maiorSalario(pessoas) {
    const pessoaMaiorSalario = pessoas.reduce((prev, current) => 
        prev.salario > current.salario ? prev : current
    );
    return pessoaMaiorSalario.salario;
}
    


function minimumWagePercentage(people) {
    let count = 0;
    people.forEach(person => {
        if (person.salario <= 350) {
            count++;
        }
    });
    return count / people.length;
}

console.log(minimumWagePercentage(pessoas));

    



