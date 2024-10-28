document.getElementById('converter').addEventListener('click', function () {
    const metros = parseFloat(document.getElementById('metros').value);
    const unidade = document.getElementById('unidade').value;
    let resultado;

    if (isNaN(metros) || metros < 0) {
        alert('Por favor, insira um valor válido para metros.');
        return;
    }

    switch (unidade) {
        case 'jardas':
            resultado = metros * 1.094;
            break;
        case 'pes':
            resultado = metros * 3.281;
            break;
        case 'polegadas':
            resultado = metros * 39.37;
            break;
        case 'milhas':
            resultado = metros * 0.000621;
            break;
        default:
            resultado = 'Unidade desconhecida';
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(3)} ${unidade}`;
});
