function calculosMatematicos(numero) {
    if (numero < 0 || !Number.isInteger(numero)) {
        return 'Por favor, insira um número inteiro positivo.';
    }

    function fatorial(n) {
        return n <= 1 ? 1 : n * fatorial(n - 1);
    }

    function fibonacci(n) {
        if (n <= 1) return n;
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            [a, b] = [b, a + b];
        }
        return b;
    }

    const resultadoFatorial = fatorial(numero);

    const sequenciaFibonacci = [];
    let a = 0, b = 1;
    for (let i = 0; i <= numero; i++) {
        sequenciaFibonacci.push(a);
        [a, b] = [b, a + b];
    }

    return {
        fatorial: resultadoFatorial,
        fibonacci: sequenciaFibonacci
    };
}

const numeroString = prompt("Digite um número:");
const numero = parseInt(numeroString);

const resultado = calculosMatematicos(numero);
console.log(resultado);
