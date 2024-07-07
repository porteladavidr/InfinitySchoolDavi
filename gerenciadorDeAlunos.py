def adicionar_aluno():
  nome = input("Digite o nome do aluno: ")
  numero_matricula = input("Digite o número de matrícula do aluno: ")

  if numero_matricula in alunos:
    print("Erro: Aluno com o número de matrícula já existe.")
  else:
    alunos[numero_matricula] = {"nome": nome}
    print("Aluno adicionado com sucesso!")

def remover_aluno():
  numero_matricula = input("Digite o número de matrícula do aluno: ")

  if numero_matricula not in alunos:
    print("Erro: Aluno com o número de matrícula não encontrado.")
  else:
    del alunos[numero_matricula]
    print("Aluno removido com sucesso!")

def atualizar_aluno():
  numero_matricula = input("Digite o número de matrícula do aluno: ")

  if numero_matricula not in alunos:
    print("Erro: Aluno com o número de matrícula não encontrado.")
  else:
    novo_nome = input("Digite o novo nome do aluno: ")
    alunos[numero_matricula]["nome"] = novo_nome
    print("Nome do aluno atualizado com sucesso!")

def ver_alunos():
  if not alunos:
    print("Não há alunos cadastrados.")
  else:
    for numero_matricula, dados_aluno in alunos.items():
      nome = dados_aluno["nome"]
      print(f"Número de matrícula: {numero_matricula}")
      print(f"Nome: {nome}")
      print()

alunos = {}

while True:
  print("\nMenu de Gerenciamento de Alunos")
  print("1. Adicionar Aluno")
  print("2. Remover Aluno")
  print("3. Atualizar Aluno")
  print("4. Ver Alunos")
  print("5. Sair")

  opção = input("Digite a opção desejada: ")

  if opção == "1":
    adicionar_aluno()
  elif opção == "2":
    remover_aluno()
  elif opção == "3":
    atualizar_aluno()
  elif opção == "4":
    ver_alunos()
  elif opção == "5":
    break
  else:
    print("Opção inválida. Tente novamente.")