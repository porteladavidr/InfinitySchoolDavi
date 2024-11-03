let saldo = 1000;

function realizarOperacao() {
    try {
        const operacao = document.getElementById('operacao').value;
        const valorInput = document.getElementById('valor');
        const resultado = document.getElementById('resultado');
        let valor = parseFloat(valorInput.value);

        if (operacao !== 'consultar' && (isNaN(valor) || valor <= 0)) {
            throw new Error("Por favor, insira um valor válido.");
        }

        switch (operacao) {
            case 'consultar':
                resultado.textContent = `Seu saldo atual é de R$ ${saldo.toFixed(2)}.`;
                break;
            case 'sacar':
                if (valor > saldo) {
                    throw new Error("Saldo insuficiente para esta operação.");
                }
                saldo -= valor;
                resultado.textContent = `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}.`;
                break;
            case 'depositar':
                saldo += valor;
                resultado.textContent = `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}.`;
                break;
            default:
                throw new Error("Operação inválida.");
        }

        valorInput.value = '';
    } catch (error) {
        document.getElementById('resultado').textContent = error.message;
    }
}
