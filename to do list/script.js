document.addEventListener("DOMContentLoaded", () => {
    const entradaTarefa = document.querySelector("#entradaTarefa");
    const botaoAdicionarTarefa = document.querySelector("#botaoAdicionarTarefa");
    const listaTarefas = document.querySelector("#listaTarefas");

    botaoAdicionarTarefa.addEventListener("click", () => {
        const textoTarefa = entradaTarefa.value.trim();

        if (textoTarefa) {
            adicionarTarefa(textoTarefa);
            entradaTarefa.value = "";
            entradaTarefa.focus();
        }
    });

    function adicionarTarefa(textoTarefa) {
        const itemTarefa = document.createElement("li");
        itemTarefa.classList.add("item-tarefa");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const spanTextoTarefa = document.createElement("span");
        spanTextoTarefa.classList.add("texto-tarefa");
        spanTextoTarefa.textContent = textoTarefa;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("botao-remover");

        checkbox.addEventListener("change", () => {
            itemTarefa.classList.toggle("concluida", checkbox.checked);
        });

        botaoRemover.addEventListener("click", () => {
            listaTarefas.removeChild(itemTarefa);
        });

        itemTarefa.appendChild(checkbox);
        itemTarefa.appendChild(spanTextoTarefa);
        itemTarefa.appendChild(botaoRemover);
        listaTarefas.appendChild(itemTarefa);
    }
});