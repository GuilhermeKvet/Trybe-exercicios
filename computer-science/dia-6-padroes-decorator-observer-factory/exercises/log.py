ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def dispara_log(message):
        return message


class LogError:
    def __init__(self, log):
        self.log_error = log

    def select_color(self, message):
        return f"{VERMELHO}{self.log_error.dispara_log(message)}{RESET}"


class LogWarning:
    def __init__(self, log):
        self.log_warning = log

    def select_color(self, message):
        return f"{LARANJA}{self.log_warning.dispara_log(message)}{RESET}"


class LogSuccess:
    def __init__(self, log):
        self.log_sucess = log

    def select_color(self, message):
        return f"{VERDE}{self.log_sucess.dispara_log(message)}{RESET}"
