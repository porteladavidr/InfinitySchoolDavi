'''
Considere uma lista de números inteiros 

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


Utilizando as funções map(),filter() e reduce(), escreva um código que execute as seguintes operações:


1 - Função map() para obter uma nova lista com o quadrado de cada número da lista numeros

2 - Função filter() para obter uma nova lista com números pares da lista numeros

3 - Função reduce()  para obter a soma de todos os números da lista numeros

Qual o resultado obtido após a execução das operações acima?
'''

from functools import reduce


def quadrado(x):
    return x ** 2

def pares(x):
    return x % 2 == 0

def somar(x, y):
    return x + y

# Lista de números
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Quadrado
qd = list(map(quadrado, numeros))

# Pares
par = list(filter(pares, numeros))

# Soma
soma = reduce(somar, numeros)

print(qd)
print(par)
print(soma)