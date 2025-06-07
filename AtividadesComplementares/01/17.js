const prompt = require('prompt-sync')();



let nomes = []
let idades = []

for (let i = 0; i < 9; i++) {
    let nome = prompt('Digite seu nome: ');
    let idade = Number(prompt('Digite sua idade: '));
    
  nomes.push(nome)
  idades.push(idade)
}

for (let i = 0; i < 9; i++) {


    if (idades[i] < 18) {
        console.log(nomes[i],idades[i] );
        
    }
    
    
    
}


