function getRandomArbitrary(min, max) {
let limite = 1

while (limite < 20) {
    return Math.random() * (max - min) + min;
    limite++
}
  
}


console.log(getRandomArbitrary(0, 10));
