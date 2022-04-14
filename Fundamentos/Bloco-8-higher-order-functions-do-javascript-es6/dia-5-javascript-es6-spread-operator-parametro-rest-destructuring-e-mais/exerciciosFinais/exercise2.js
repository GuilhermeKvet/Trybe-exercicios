//2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...elements) => elements.reduce((acc, value) => acc + value, 0);