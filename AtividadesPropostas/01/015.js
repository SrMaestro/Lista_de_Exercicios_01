//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for



let a = 0; 
let b = 1; 

console.log(a); 
console.log(b); 

for (let i = 2; i < 10; i++) { 
    let next = a + b; 
    console.log(next); 
    a = b; 
    b = next; 
}