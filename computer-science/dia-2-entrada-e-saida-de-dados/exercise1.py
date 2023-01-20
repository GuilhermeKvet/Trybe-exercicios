# Faça um programa que receba um nome e imprima o mesmo na vertical em escada
# invertida.

name = input("Digite um nome:")

remove_letter = name

while len(remove_letter) > 0:
    print(remove_letter)
    remove_letter = remove_letter[:-1]
