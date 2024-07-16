import tkinter as tk
from tkinter import messagebox

def main():
    window = tk.Tk()
    window.title("Login Seguro")
    window.geometry("300x200")

    def login():
        email = entry_email.get()
        password = entry_password.get()

        if "@" not in email:
            messagebox.showerror("Erro de Login", "Email inválido. Insira um email válido com '@'.")
            return

        if len(password) < 6:
            messagebox.showerror("Erro de Login", "Senha inválida. Mínimo de 6 caracteres.")
            return

        ## Acresentei uma lista de login e senha para simular um DB
        usuarios = [
            {"email": "exemplo1@email.com.br", "senha": "senha123"},
            {"email": "exemplo2@email.com.br", "senha": "senha456"},
        ]

        usuario_encontrado = False
        for usuario in usuarios:
            if usuario["email"] == email and usuario["senha"] == password:
                usuario_encontrado = True
                break

        if usuario_encontrado:
            messagebox.showinfo("Sucesso!", "Login realizado com sucesso!")
            window.destroy() 
        else:
            messagebox.showerror("Erro de Login", "Usuário ou senha incorretos.")

    label_email = tk.Label(window, text="Email:")
    label_email.grid(row=0, column=0, padx=5, pady=5)

    entry_email = tk.Entry(window)
    entry_email.grid(row=0, column=1, padx=5, pady=5)

    label_password = tk.Label(window, text="Senha:")
    label_password.grid(row=1, column=0, padx=5, pady=5)

    entry_password = tk.Entry(window, show="*")
    entry_password.grid(row=1, column=1, padx=5, pady=5)

    login_button = tk.Button(window, text="Login", command=login)
    login_button.grid(row=2, columnspan=2, padx=5, pady=5)

    window.mainloop()

if __name__ == "__main__":
    main()
