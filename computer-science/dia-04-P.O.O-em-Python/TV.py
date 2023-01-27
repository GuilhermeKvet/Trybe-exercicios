class TV:
    def __init__(self, volume, canal, tamanho, ligada):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.valume < 99:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1

    def modificar_canal(self, canal):
        if canal >= 1 or canal <= 99:
            self.canal = canal
        else:
            raise ValueError("O canal deve ser um valor entre 1 e 99")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
