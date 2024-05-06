nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))
altura = float(input("Digite sua altura em metros: "))
tem_filhos = input("Você tem filhos? (sim/não): ")

if tem_filhos == "sim":
    print(f"Olá, {nome}! Você tem {idade} anos e mede {altura} metros e possui filhos.")
else:
    print(f"Olá, {nome}! Você tem {idade} anos e mede {altura} metros.")
