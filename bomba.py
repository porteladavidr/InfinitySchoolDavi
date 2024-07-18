class BombaCombustivel:
    def __init__(self, tipo_combustivel, valor_litro, quantidade_combustivel):
        self.tipo_combustivel = tipo_combustivel
        self.valor_litro = valor_litro
        self.quantidade_combustivel = quantidade_combustivel

    def abastecer_por_valor(self, valor):
        litros_abastecidos = valor / self.valor_litro
        if litros_abastecidos <= self.quantidade_combustivel:
            self.quantidade_combustivel -= litros_abastecidos
            print(f"Abastecido {litros_abastecidos:.2f} litros de {self.tipo_combustivel}.")
        else:
            print("Quantidade de combustível insuficiente na bomba.")

    def abastecer_por_litro(self, litros):
        valor_a_pagar = litros * self.valor_litro
        if litros <= self.quantidade_combustivel:
            self.quantidade_combustivel -= litros
            print(f"Valor a ser pago: R${valor_a_pagar:.2f}.")
        else:
            print("Quantidade de combustível insuficiente na bomba.")

    def alterar_valor(self, novo_valor):
        self.valor_litro = novo_valor
        print(f"Novo valor por litro de {self.tipo_combustivel}: R${self.valor_litro:.2f}")

    def alterar_combustivel(self, novo_combustivel):
        self.tipo_combustivel = novo_combustivel
        print(f"Tipo de combustível alterado para {self.tipo_combustivel}")

    def alterar_quantidade_combustivel(self, nova_quantidade):
        self.quantidade_combustivel = nova_quantidade
        print(f"Quantidade de combustível na bomba alterada para {self.quantidade_combustivel:.2f} litros")

def menu():
    bomba = BombaCombustivel("Gasolina", 5.49, 1000)
    while True:
        print("\nMenu:")
        print("1. Abastecer por valor")
        print("2. Abastecer por litro")
        print("3. Alterar valor por litro")
        print("4. Alterar tipo de combustível")
        print("5. Alterar quantidade de combustível na bomba")
        print("0. Sair")
        opcao = int(input("Escolha uma opção: "))

        if opcao == 1:
            valor = float(input("Informe o valor a ser abastecido: R$"))
            bomba.abastecer_por_valor(valor)
        elif opcao == 2:
            litros = float(input("Informe a quantidade em litros a ser abastecida: "))
            bomba.abastecer_por_litro(litros)
        elif opcao == 3:
            novo_valor = float(input("Informe o novo valor por litro: R$"))
            bomba.alterar_valor(novo_valor)
        elif opcao == 4:
            novo_combustivel = input("Informe o novo tipo de combustível: ")
            bomba.alterar_combustivel(novo_combustivel)
        elif opcao == 5:
            nova_quantidade = float(input("Informe a nova quantidade de combustível na bomba: "))
            bomba.alterar_quantidade_combustivel(nova_quantidade)
        elif opcao == 0:
            print("Saindo do programa...")
            break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    menu()
