let tarefas = [];

function adicionarTarefa() {
  const nomeTarefa = document.getElementById('nomeTarefa').value;
  const responsavel = document.getElementById('responsavel').value;
  const dataVencimento = document.getElementById('dataVencimento').value;

  if (nomeTarefa && responsavel && dataVencimento) {
    const tarefa = {
      id: Date.now(),
      nome: nomeTarefa,
      responsavel: responsavel,
      dataVencimento: dataVencimento,
      concluida: false
    };
    tarefas.push(tarefa);
    renderizarTarefas();
    limparFormulario();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById('listaTarefas');
  listaTarefas.innerHTML = '';

  tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    li.textContent = `${tarefa.nome} - Responsável: ${tarefa.responsavel} - Vencimento: ${tarefa.dataVencimento}`;

    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = tarefa.concluida ? "Concluída" : "Marcar como Concluída";
    botaoConcluir.onclick = () => alternarConcluida(tarefa.id);

    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(tarefa.id);

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerTarefa(tarefa.id);

    li.appendChild(botaoConcluir);
    li.appendChild(botaoEditar);
    li.appendChild(botaoRemover);

    listaTarefas.appendChild(li);
  });
}

function limparFormulario() {
  document.getElementById('nomeTarefa').value = '';
  document.getElementById('responsavel').value = '';
  document.getElementById('dataVencimento').value = '';
}

function alternarConcluida(idTarefa) {
  const tarefa = tarefas.find(t => t.id === idTarefa);
  if (tarefa) {
    tarefa.concluida = !tarefa.concluida;
    renderizarTarefas();
  }
}

function editarTarefa(idTarefa) {
  const tarefa = tarefas.find(t => t.id === idTarefa);
  if (tarefa) {
    document.getElementById('nomeTarefa').value = tarefa.nome;
    document.getElementById('responsavel').value = tarefa.responsavel;
    document.getElementById('dataVencimento').value = tarefa.dataVencimento;
    
    removerTarefa(idTarefa);
  }
}

function removerTarefa(idTarefa) {
  tarefas = tarefas.filter(tarefa => tarefa.id !== idTarefa);
  renderizarTarefas();
}
