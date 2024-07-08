from tkinter import *

def converter():
  try:
    centimetros = float(entrada_centimetros.get())
    metros = centimetros / 100
    resultado.config(text=f"{centimetros:.2f} cm equivalem a {metros:.2f} m")
  except ValueError:
    resultado.config(text="Valor inválido!")

janela = Tk()
janela.title("Conversor de Centímetros para Metros")

rotulo_centimetros = Label(janela, text="Digite o valor em centímetros:")
rotulo_centimetros.pack()
entrada_centimetros = Entry(janela)
entrada_centimetros.pack()

botao_converter = Button(janela, text="Converter", command=converter)
botao_converter.pack()

resultado = Label(janela, text="")
resultado.pack()

janela.mainloop()