import random

# Modifique o exercício anterior para que as palavras sejam lidas de um
# arquivo. Considere que o arquivo terá cada palavra em uma linha.

random_word = random.choice(["Agua", "Animal", "Planta"])
scrambled_word = "".join(random.sample(random_word, len(random_word)))

print(f"{scrambled_word}")
print("Adivinhe a palavra acima, voce tem 3 tentativas")

tentativas = []

tentativa1 = input("Tentativa 1: ")
tentativas.append(tentativa1)

tentativa2 = input("Tentativa 2: ")
tentativas.append(tentativa2)

tentativa3 = input("Tentativa 3: ")
tentativas.append(tentativa3)


def escreve_arquivo():
    tentativas_formatadas = []
    for tentativa in tentativas:
        tentativas_formatadas.append(f"{tentativa}\n")
    with open("tentativas.txt", mode="w") as file:
        file.writelines(tentativas_formatadas)


for tentativa in tentativas:
    if tentativa.lower() == random_word.lower():
        print(f"A palavra era {random_word}, parabens voce acetou!!")
        escreve_arquivo()
        break
    else:
        print(f"A palavra era {random_word}, Tente novamente!!")
        escreve_arquivo()
        break
