from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.rotinas = []

    def adiciona_rotina(self, rotina):
        self.rotinas.append(rotina)

    def acionar_rotinas(self):
        for rotina in self.rotinas:
            rotina.aciona()

    def desperta(self):
        self.acionar_rotinas()


class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        pass


class AcionadorLuzes(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Acendendo luzes")


class AcionadorCafeteira(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Preparando café")
