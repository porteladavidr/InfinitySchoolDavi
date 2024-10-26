function calcularEstatisticasNotas() {

    const numAlunos = parseInt(prompt("Digite o número total de alunos na turma:"));
  
    let somaNotas = 0;
    let maiorNota = Number.MIN_SAFE_INTEGER;
    let menorNota = Number.MAX_SAFE_INTEGER;
  
    for (let i = 1; i <= numAlunos; i++) {
      const nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
  
      somaNotas += nota;
  
      if (nota > maiorNota) {
        maiorNota = nota;
      }
  
      if (nota < menorNota) {
        menorNota = nota;
      }
    }
  
    const media = somaNotas / numAlunos;
  
    console.log("Resultados:");
    console.log(`Média da turma: ${media.toFixed(2)}`);
    console.log(`Maior nota: ${maiorNota}`);
    console.log(`Menor nota: ${menorNota}`);
  }
  
  calcularEstatisticasNotas();