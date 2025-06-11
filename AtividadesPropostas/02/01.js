function ehBissexto(ano) {
    return (ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false; // Ano, mês ou dia inválidos
    }
    const diasPorMes = [31, ehBissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (dia > diasPorMes[mes - 1]) {
        return false; // Dia inválido para o mês
    }
    return true; // Data válida
}

console.log(ehDataValida(29, 2, 2020)); // true
console.log(ehDataValida(31, 4, 2024)); // false
console.log(ehDataValida(28, 2, 2023)); // true
console.log(ehDataValida(29, 2, 2023)); // false