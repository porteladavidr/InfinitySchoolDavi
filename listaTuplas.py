valores = []
for i in range(4):
    valor = int(input("Digite o {}º valor: ".format(i + 1)))
    valores.append(valor)

pares = tuple(valor for valor in valores if valor % 2 == 0)
impares = tuple(valor for valor in valores if valor % 2 != 0)

print("Números pares:", pares)

print("Números ímpares:", impares)

print("Quantidade de números pares:", len(pares))
print("Quantidade de números ímpares:", len(impares))

soma_pares = sum(pares)
soma_impares = sum(impares)
print("Soma dos números pares:", soma_pares)
print("Soma dos números ímpares:", soma_impares)
