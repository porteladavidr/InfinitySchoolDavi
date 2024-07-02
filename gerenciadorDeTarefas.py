tarefas = {}
tarefa_id = 0
def adicionar_tarefa(nome, descricao, prioridade, categoria):
    global tarefa_id
    tarefas[tarefa_id] = {
        'nome': nome,
        'descricao': descricao,
        'prioridade': prioridade,
        'categoria': categoria,
        'concluida': False
    }
    tarefa_id = tarefa_id + 1

def listar_tarefas():
    for tarefa_id, tarefa in tarefas.items():
        status = "Concluída" if tarefa['concluida'] else "Pendente"
        print(f"{tarefa_id}: {tarefa['nome']} - {status}")

def marcar_concluida(tarefa_id):
    tarefa_id = int(tarefa_id)
    if tarefa_id in tarefas:
        tarefas[tarefa_id]['concluida'] = True
    else:
        print("Tarefa não encontrada.")

def exibir_tarefas_por_prioridade(prioridade):
    for tarefa_id, tarefa in tarefas.items():
        if tarefa['prioridade'] == prioridade:
            status = "Concluída" if tarefa['concluida'] else "Pendente"
            print(f"{tarefa_id}: {tarefa['nome']} - {status}")

def exibir_tarefas_por_categoria(categoria):
    for tarefa_id, tarefa in tarefas.items():
        if tarefa['categoria'] == categoria:
            status = "Concluída" if tarefa['concluida'] else "Pendente"
            print(f"{tarefa_id}: {tarefa['nome']} - {status}")

def menu():
    while True:
        print("\nMenu de Comandos")
        print("1. Adicionar Tarefa")
        print("2. Listar Tarefas")
        print("3. Marcar Tarefa como Concluída")
        print("4. Exibir Tarefas por Prioridade")
        print("5. Exibir Tarefas por Categoria")
        print("6. Sair")
        
        escolha = input("Escolha uma opção: ")
        
        if escolha == '1':
            nome = input("Nome da Tarefa: ")
            descricao = input("Descrição da Tarefa: ")
            prioridade = input("Prioridade da Tarefa: ")
            categoria = input("Categoria da Tarefa: ")
            adicionar_tarefa(nome, descricao, prioridade, categoria)
        elif escolha == '2':
            listar_tarefas()
        elif escolha == '3':
            tarefa_id = input("ID da Tarefa a ser marcada como concluída: ")
            marcar_concluida(tarefa_id)
        elif escolha == '4':
            prioridade = input("Prioridade: ")
            exibir_tarefas_por_prioridade(prioridade)
        elif escolha == '5':
            categoria = input("Categoria: ")
            exibir_tarefas_por_categoria(categoria)
        elif escolha == '6':
            break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    menu()
