import random


# Qual o nivel de complexidade do algoritmo a seguir:


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


# Pior caso: O(n log n)
# Melhor caso: O(n log n)
# Caso médio: O(n log n)


# Suponha que se está escrevendo uma função para um jogo de batalha naval.
# Dado um array bidimensional com n linhas e m colunas, e um par de
# coordenadas x para linhas e y para colunas,
# o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:

# entrada = [ 0 0 0 0 1
#             0 0 0 0 1
#             1 1 1 1 1
#             0 0 0 1 0 ]

# resultado para (0, 4) = True
# resultado para (1, 1) = False

# 1- Qual seria a ordem de complexidade da solução para este problema?
# 2- E a complexidade de espaço?

# 1- O(1)
# 2- O(1)


# Utilize o módulo random da linguagem Python para gerar um array
# com 100 números. Cada um desses números deve ser a média de n números
# gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de
# espaço deste programa?


def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages


# A complexidade é 0(N), pois o que vai modificar a velocidade de execução
# é o tamanho da variavel N.
