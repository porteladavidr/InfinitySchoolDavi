senha_cad = '123'
email_cad = '123@gmail.com'

sucess = False

while sucess != True:
    senha = input("Digite a senha: ")
    email = input("Digite o e-mail:")

    if(email == email_cad and senha == senha_cad):
        print("Login realizado com suceso!")
        sucess = True
    else:
        print("Credenciais incorretas, Favor tentar novamente")