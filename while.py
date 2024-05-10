'''
Escreva um programa em python que leia números inteiros do teclado. O programa deve ler os números até que o usuário digite 0 (zero). 
No final da execução, exiba a quantidade de números digitados, assim como a soma e a média aritmética.
'''

count = 0
somaInt = 0

inteiro = int(input("Informe um número inteiro aleatório ou digite 0 para encerrar:"))
count = count+1
somaInt = somaInt + inteiro
while inteiro != 0:
    inteiro = int(input("Informe um número inteiro aleatório ou digite 0 para encerrar:"))
    count = count+1
    somaInt = somaInt + inteiro

mAritimetica = somaInt/count

print("Você digitou {} números, a soma destes números é {} e a média aritimérica é {}".format(count, somaInt, mAritimetica))