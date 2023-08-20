function sequenciaFibonacci(n) {
    if (n <= 1) {
        return n
    } else {
        return sequenciaFibonacci(n - 1) + sequenciaFibonacci(n - 2)
    }
}

console.log(sequenciaFibonacci(3))