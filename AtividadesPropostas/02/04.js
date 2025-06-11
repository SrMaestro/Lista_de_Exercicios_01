function recursiveFatorial (n){

    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * recursiveFatorial(n - 1);
    }
}
console.log(recursiveFatorial(5)); // 120
