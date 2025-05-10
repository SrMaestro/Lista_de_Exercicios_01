let contador = 13; 
let a = 0; 
let b = 1; 

console.log(a); 
console.log(b); 

while (contador > 0) { 
    //console.log(a);
    let proximo = a + b; 
    console.log(proximo); 
    a = b; 
    b = proximo; 
contador--;
}