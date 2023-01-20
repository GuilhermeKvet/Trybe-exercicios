import random

# # Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária
# # tenha que adivinhar uma palavra que será mostrada com as letras
# embaralhadas.
# # O programa terá uma lista de palavras e escolherá uma aleatoriamente. O
# # jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra
# # deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

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

for tentativa in tentativas:
    if tentativa.lower() == random_word.lower():
        print(f"A palavra era {random_word}, parabens voce acetou!!")
        break
    else:
        print(f"A palavra era {random_word}, Tente novamente!!")
        break


# WORDS = [
#     "cat",
#     "elephant",
#     "dog",
#     "monkey",
#     "duck",
#     "chameleon",
#     "bear",
#     "moose",
#     "rooster",
# ]
# MAX_ATTEMPTS = 3


# def draw_secret_word(words):
#     secret_word = random.choice(words)
#     scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
#     return secret_word, scrambled_word


# def collect_guesses():
#     guesses = []
#     for attempt in range(MAX_ATTEMPTS):
#         guess = input("Guess the word: ")
#         guesses.append(guess)
#     return guesses


# def check_game_result(secret_word, guesses):
#     if secret_word in guesses:
#         print(f"You win: {secret_word}")
#     else:
#         print(f"You lose: {secret_word}")


# if __name__ == "__main__":
#     secret_word, scrambled_word = draw_secret_word(WORDS)
#     print(f"Scrambled word is {scrambled_word}")
#     guesses = collect_guesses()
#     check_game_result(secret_word, guesses)
