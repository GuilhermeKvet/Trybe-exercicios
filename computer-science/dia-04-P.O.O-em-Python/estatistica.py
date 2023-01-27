from collections import Counter


class Estatistica:
    @classmethod
    def media(self, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(self, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    @classmethod
    def moda(self, numbers):
        number, _ = Counter(numbers).most_common()[0]
        return number
