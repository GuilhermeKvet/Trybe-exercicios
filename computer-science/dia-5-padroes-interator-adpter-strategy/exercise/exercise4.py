from abc import ABC, abstractmethod
from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class BaralhoInterator(Iterator):
    def __init__(self, cartas, estrategia):
        self.cartas = cartas
        self.__estrategia = estrategia
        self.__index = 0

    def __next__(self):
        try:
            result = self.cartas[self.__index]
        except IndexError:
            raise StopIteration
        else:
            self.__index = self.__estrategia.proxima_carta(self.__index)
            return result


class EstrategiaAbstrata(ABC):
    @abstractmethod
    def proxima_carta(self, index):
        raise NotImplementedError


class EstrategiaASC(EstrategiaAbstrata):
    @classmethod
    def proxima_carta(self, index):
        raise index + 1


class EstrategiaDESC(EstrategiaAbstrata):
    @classmethod
    def proxima_carta(self, index):
        raise index - 1


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

        self.estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoInterator(self._cartas, self.estrategia)
