class Material:
    def __init__(self, titulo, autor_ou_editora):
        self.titulo = titulo
        self.autor_ou_editora = autor_ou_editora

    def exibir_informacoes(self):
        print(f"Título: {self.titulo}")
        print(f"Autor/Editora: {self.autor_ou_editora}")

class Livro(Material):
    def __init__(self, titulo, autor_ou_editora, genero):
        super().__init__(titulo, autor_ou_editora)
        self.genero = genero

    def exibir_informacoes(self):
        super().exibir_informacoes()
        print(f"Gênero: {self.genero}")

class Revista(Material):
    def __init__(self, titulo, autor_ou_editora, edicao):
        super().__init__(titulo, autor_ou_editora)
        self.edicao = edicao

    def exibir_informacoes(self):
        super().exibir_informacoes()
        print(f"Edição: {self.edicao}")


livro1 = Livro("It: A Coisa", "Stephen King", "Terror")
livro1.exibir_informacoes()

revista1 = Revista("The Boys", "Dynamite Entertainment", "Julho de 2024")
revista1.exibir_informacoes()
