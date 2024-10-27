function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);
    
    if (!peso || !alturaCm) {
        document.getElementById('resultado').textContent = "Por favor, preencha ambos os campos.";
        return;
    }

    const alturaM = alturaCm / 100;
    const imc = peso / (alturaM * alturaM);
    document.getElementById('resultado').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
}
