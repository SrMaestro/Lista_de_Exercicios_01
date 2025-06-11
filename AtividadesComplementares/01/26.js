function produtoDeMatrizes(mA, mB) {
    let linhasA = mA.length;
    let colunasA = mA[0].length;
    let linhasB = mB.length;
    let colunasB = mB[0].length;

    if (colunasA !== linhasB) {
        console.log("Nao e possivel fazer a multiplicacao");
        return;
    }

    let p = [];
    for (let i = 0; i < linhasA; i++) {
        p[i] = [];
        for (let j = 0; j < colunasB; j++) {
            let soma = 0;
            for (let k = 0; k < colunasA; k++) {
                soma += mA[i][k] * mB[k][j];
            }
            p[i][j] = soma;
        }
    }
    return p;
}

let a = [
    [1, 2],
    [3, 4]
];

let b = [
    [5, 6],
    [7, 8]
];

console.table(produtoDeMatrizes(a, b));