function criarMatrizIdentidade(tamanho) {
  const matriz = [];
  
  for (let i = 0; i < tamanho; i++) {
    matriz[i] = []; 
    
    for (let j = 0; j < tamanho; j++) {
     
      matriz[i][j] = (i === j) ? 1 : 0;
    }
  }
  
  return matriz;
}


const matrizIdentidade3x3 = criarMatrizIdentidade(3);
console.log(matrizIdentidade3x3);