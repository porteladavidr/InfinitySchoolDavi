def exibir_menu():
    print("\nMenu:")
    print("1. Adicionar produto")
    print("2. Ver lista de produtos")
    print("3. Atualizar produto")
    print("4. Remover produto")
    print("5. Encerrar programa")

def adicionar_produto(lista_produtos, total_produtos):
    produto = input("Nome do produto: ")
    quantidade = int(input("Quantidade: "))
    valor = float(input("Valor unitário: "))
    total = quantidade * valor
    lista_produtos.append({
        "produto": produto,
        "quantidade": quantidade,
        "valor": valor,
        "total": total
    })
    total_produtos += total
    print(f"Produto {produto} adicionado com sucesso!")
    return total_produtos

def ver_lista_produtos(lista_produtos, total_produtos):
    if not lista_produtos:
        print("A lista de produtos está vazia.")
    else:
        for produto in lista_produtos:
            print(f"Produto: {produto['produto']}, Quantidade: {produto['quantidade']}, Valor unitário: {produto['valor']:.2f}, Valor total: {produto['total']:.2f}")
        print(f"Valor total de todos os produtos: {total_produtos:.2f}")

def atualizar_produto(lista_produtos, total_produtos):
    nome_produto = input("Nome do produto a ser atualizado: ")
    for produto in lista_produtos:
        if produto['produto'] == nome_produto:
            total_produtos -= produto['total']
            produto['produto'] = input("Novo nome do produto: ")
            produto['quantidade'] = int(input("Nova quantidade: "))
            produto['valor'] = float(input("Novo valor unitário: "))
            produto['total'] = produto['quantidade'] * produto['valor']
            total_produtos += produto['total']
            print(f"Produto {nome_produto} atualizado com sucesso!")
            return total_produtos
    print(f"Produto {nome_produto} não encontrado.")
    return total_produtos

def remover_produto(lista_produtos, total_produtos):
    nome_produto = input("Nome do produto a ser removido: ")
    for produto in lista_produtos:
        if produto['produto'] == nome_produto:
            total_produtos -= produto['total']
            lista_produtos.remove(produto)
            print(f"Produto {nome_produto} removido com sucesso!")
            return total_produtos
    print(f"Produto {nome_produto} não encontrado.")
    return total_produtos

def main():
    lista_produtos = []
    total_produtos = 0.0

    while True:
        exibir_menu()
        opcao = input("Escolha uma opção: ")

        if opcao == '1':
            total_produtos = adicionar_produto(lista_produtos, total_produtos)
        elif opcao == '2':
            ver_lista_produtos(lista_produtos, total_produtos)
        elif opcao == '3':
            total_produtos = atualizar_produto(lista_produtos, total_produtos)
        elif opcao == '4':
            total_produtos = remover_produto(lista_produtos, total_produtos)
        elif opcao == '5':
            print("Encerrando o programa.")
            break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    main()
