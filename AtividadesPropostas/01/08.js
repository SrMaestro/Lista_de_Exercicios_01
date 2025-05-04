const prompt = require('prompt-sync')();

const a = parseFloat(prompt('Digite o valor do lado A: '));
const b = parseFloat(prompt('Digite o valor do lado B: '));

if (a === b){
    console.log('Os valores sao iguais!');
    

}else if (a > b){
    console.log(`${b} ---> ${a}`);
    
}else{
    console.log(`${a} ---> ${b}`);
    
}