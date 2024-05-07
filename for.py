'''SIMULADOR DE CADASTRO DE SENHA E INICIALIZAÇÃO DE CELULAR

Utilizando o aprendizado desta aula, implementaremos um sistema de cadastro de senha e inicialização do celular utilizando o loop "for".

Após ligar o celular, o usuário é solicitado a inserir a senha cadastrada.
São permitidas 3 tentativas até que o telefone seja bloqueado.
Se o usuário acertar a senha, uma mensagem de boas-vindas é exibida: "Bem-vindo."
Se o usuário errar a senha, uma mensagem informando o erro é exibida, junto com o número de tentativas restantes até o bloqueio do telefone.
Pense em todas as possibilidades e faça um sistema completo.'''

count = 3
senhaCorreta = "1234"

print("Tela de desbloqueio você possui 3 tentativas:")

for i in range(count):
    senha = input("Digite a senha:")

    if(senha == senhaCorreta):
        print("Bem vindo.")
        break
    else:
        print("Senha incorreta.")
        count = count - 1
        print("Você possui {} tentativas".format(count))