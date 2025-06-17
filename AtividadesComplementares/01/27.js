//Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.

//Esta e minha matriz 6x6, certo
let M = [
    [ 1,  2,  3,  4,  5,  6],
    [ 7,  8,  9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

let A = 2; // valor para multiplicar, Aqui indica o valor no qua; iremos multiplicar nosso array

let V = M.flatMap(linha => linha.map(elemento => elemento * A));

console.log(V); // Vetor V com 36 elementos multiplicados por 2