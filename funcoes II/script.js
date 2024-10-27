
const calcularGorjeta = () => {
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const qualidadeServico = parseFloat(document.getElementById('qualidadeServico').value);
    
    if (isNaN(valorConta) || valorConta <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido.';
        return;
    }

    const gorjeta = valorConta * qualidadeServico;
    const total = valorConta + gorjeta;

    const exibirResultado = (valorGorjeta, valorTotal) => {
        document.getElementById('resultado').innerText = `Gorjeta: R$ ${valorGorjeta.toFixed(2)} | Total: R$ ${valorTotal.toFixed(2)}`;
    };

    exibirResultado(gorjeta, total);
};

document.getElementById('calcularGorjeta').addEventListener('click', calcularGorjeta);
