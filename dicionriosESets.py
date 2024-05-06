alunos = {}

while True:
    print("\nEscolha uma opção:")
    print("1. Adicionar aluno")
    print("2. Remover aluno")
    print("3. Visualizar todos os alunos")
    print("4. Sair")
    opcao = input("Digite o número da opção desejada: ")

    if opcao == '1':
        nome = input("Digite o nome do aluno: ")
        matricula = input("Digite o número de matrícula do aluno: ")
        alunos[matricula] = nome
        print("Aluno adicionado com sucesso!")
    elif opcao == '2':
        matricula = input("Digite o número de matrícula do aluno que deseja remover: ")
        if matricula in alunos:
            del alunos[matricula]
            print("Aluno removido com sucesso!")
        else:
            print("Número de matrícula não encontrado.")
    elif opcao == '3':
        print("Lista de alunos:")
        for matricula, nome in alunos.items():
            print(f"Matrícula: {matricula} - Nome: {nome}")
    elif opcao == '4':
        print("Saindo do programa...")
        break
    else:
        print("Opção inválida. Por favor, escolha uma opção válida.")
