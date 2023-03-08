#  Crie um algoritmo não recursivo para contar quantos números pares existem
# em uma sequência numérica (1 a n).


def pairs_counter(n):
    count = 0
    for num in range(1, n + 1):
        if num % 2 == 0:
            count += 1
    return count


print(pairs_counter(10))


# Transforme o algoritmo criado acima em recursivo.


def recursive_pairs_counter(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_pairs_counter(n - 1)
    else:
        return recursive_pairs_counter(n - 1)


print(recursive_pairs_counter(10))
