function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args); // JSON.stringify(args) transforma esse array em uma string JSON.
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        } else {
            const result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    }
}

function soma(a, b) {
    console.log('Calculando...');
    return a + b;
}

const somaMemo = memoize(soma);

console.log(somaMemo(2, 3)); // Calculando... 5
console.log(somaMemo(2, 3)); // 5 (instantâneo, sem "Calculando...")