km = int(input("Indique a velocidade:"))

if(km>80):
    ult = km - 80
    multa = ult * 20
    print("Você ultrapassou a velocidade permitida {}km, a sua multa é no valor de {}".format(ult,multa))
else:
    print("Velocidade dentro do permitido")