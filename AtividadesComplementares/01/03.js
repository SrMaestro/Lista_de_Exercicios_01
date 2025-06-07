const prompt = require('prompt-sync')({ sigint: true });

let distanciaEmKm = parseFloat(prompt('Digite a distância em km: '));
let custo = 0;

if(distanciaEmKm <= 200){
    let custo = distanciaEmKm * 0.50;
    console.log(`O custo da viagem é R$ ${custo.toFixed(2)}`);
    
}

if(distanciaEmKm > 200){
    let custo = distanciaEmKm * 0.45;
    console.log(`O custo da viagem é R$ ${custo.toFixed(2)}`);
    
}