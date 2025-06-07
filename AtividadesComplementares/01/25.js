let linhas = 15
let colunas = 30
let matriz = [];

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100) + 1;
    }
}

let soma = 0;
matriz.forEach(linha => {
    linha.forEach(valor => {
        soma += valor;
    });
});

console.log("Soma de todos os elementos da matriz:", soma);