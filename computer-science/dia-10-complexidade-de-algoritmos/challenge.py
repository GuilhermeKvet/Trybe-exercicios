# Verificar se a soma de um par de numeros em um array [numbers],
# resulta em um valor especificado [target].
# Se sim, retorna True, se nao retorna False.


def sum_pars(numbers: list, target: int):
    first_idx = 0
    last_idx = len(numbers) - 1

    while first_idx != last_idx:
        if numbers[first_idx] + numbers[last_idx] == target:
            return True
        elif numbers[first_idx] + numbers[last_idx] < target:
            first_idx += 1
        else:
            last_idx -= 1
    return False


array = sum_pars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8], 10)
print(array)
