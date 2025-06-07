// Dados dos funcionários (simulando uma tabela)
const funcionarios = [
    { matricula: 101, nome: "João Silva", salarioBruto: 5000.00 },
    { matricula: 102, nome: "Maria Souza", salarioBruto: 6200.00 },
    { matricula: 103, nome: "Carlos Oliveira", salarioBruto: 4500.00 },
    // Adicione mais funcionários conforme necessário
];

// Função para calcular a dedução do INSS (exemplo simplificado)
function calcularINSS(salarioBruto) {
    if (salarioBruto <= 1412.00) {
        return salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
        return salarioBruto * 0.09;
    } else if (salarioBruto <= 4000.03) {
        return salarioBruto * 0.12;
    } else {
        return salarioBruto * 0.14; // Teto de contribuição (simplificado)
    }
}

// Função para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto, inss) {
    return salarioBruto - inss;
}

// Gerar contracheques
function gerarContracheques() {
    funcionarios.forEach(funcionario => {
        const inss = calcularINSS(funcionario.salarioBruto);
        const salarioLiquido = calcularSalarioLiquido(funcionario.salarioBruto, inss);

        console.log("-------------------------------");
        console.log(`Matrícula: ${funcionario.matricula}`);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS: R$ ${inss.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
        console.log("-------------------------------\n");
    });
}

// Executar
gerarContracheques();