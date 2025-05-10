let contador = 15; 
let a = 0; 
let b = 1; 
let vetor = []

console.log(a); 
console.log(b); 

while (contador > 0) { 
    //console.log(a);
    let proximo = a + b; 
    console.log(proximo);
    vetor.push(proximo)  
    a = b; 
    b = proximo; 
    
contador--;
}
console.table(vetor);
