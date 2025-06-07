// Definindo a matriz M (6 linhas x 8 colunas)
const M = [
    [1, -2, 3, -4, 5, -6, 7, -8],   // Linha 1 (3 negativos)
    [-1, 2, -3, 4, -5, 6, -7, 8],   // Linha 2 (4 negativos)
    [0, -1, -2, -3, -4, -5, -6, -7], // Linha 3 (7 negativos)
    [1, 2, 3, 4, 5, 6, 7, 8],        // Linha 4 (0 negativos)
    [-1, -1, -1, 1, 1, 1, 1, 1],     // Linha 5 (3 negativos)
    [0, 0, 0, 0, 0, 0, 0, -1]        // Linha 6 (1 negativo)
];


const C = [];


for (let i = 0; i < M.length; i++) {
    let contadorNegativos = 0;
    
   
    for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] < 0) {
            contadorNegativos++;
        }
    }
    
  
    C.push(contadorNegativos);
}

console.log("Vetor C (quantidade de negativos por linha):", C);