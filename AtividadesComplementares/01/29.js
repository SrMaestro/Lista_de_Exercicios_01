let matriz = [
    [ 1,  2,  3,  4,  5],
    [ 6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];


function somaLinha(array,linha) {
    let element = array[linha];
    return element.reduce((acc, n) => acc + n, 0);
}

function somaDiagonalPrincipal(matriz) {
  let soma = 0;
  const tamanho = matriz.length; // Assume que a matriz é quadrada

  for (let i = 0; i < tamanho; i++) {
    soma += matriz[i][i];
  }

  return soma;
}


function somaMatriz(array){
    let soma = []
    for (const element of array) {
        soma.push(element.reduce((acc, n) => acc + n, 0))
    }

    return soma.reduce((acc, n) => acc + n , 0)

}


console.log(somaLinha(matriz,3));
console.log(somaDiagonalPrincipal(matriz));
console.log(somaMatriz(matriz))










