//1 - A função sum(a, b) retorna a soma do parâmetro a com o b
//Teste se o retorno de sum(4, 5) é 9
//Teste se o retorno de sum(0, 0) é 0
//Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require('./sum');

describe('A funcao sum', () => {
  it('a soma de 4 com 5 tem que ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('a soma de 4 com 5 tem que ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('a soma de 0 com 0 tem que ser 0', () => {
    expect(() => { sum(4, '5') }).toThrow("parameters must be numbers");
  })
});

//2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
//Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

describe('A funcao myRemove', () => {
  it('A funcao recebe um array e retorna um copia sem o elemento "item", caso exista', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

//3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
//Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
//Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
//Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
//Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
//Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe('A funcao myFizzBuzz', () => {
  it('Verifica, se de acordo com o numero, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('')).toBe(false);
  })
})

//4 - Para as funções encode e decode crie os seguintes testes em Jest:
//Teste se encode e decode são funções;
//Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
//Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
//Teste se as demais letras/números não são convertidos para cada caso;
//Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

describe('A funcao encode', () => {
  it('A funcao encode deve ser uma funcao', () => {
    expect(typeof encode).toBe('function');
  });
  it('As vogais devem ser converdidas para numeros correspondentes', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toBe('1', '2', '3', '4', '5');
  });
  it('A vogal a deve ser convertida em 1', () => {
    expect(encode('ana')).toBe('1n1');
  })
  it('Testa se a string retornada tem o mesmo numero de caractere do parametro', () => {
    expect(encode('ana').length).toBe(3);
  })
});

describe('A funcao decode', () => {
  it('A funcao decode deve ser uma funcao', () => {
    expect(typeof decode).toBe('function');
  });
  it('Os numeros devem ser converdidas para as vogais correspondentes', () => {
    expect(decode('1', '2', '3', '4', '5')).toBe('a', 'e', 'i', 'o', 'u');
  })
  it('O numero 1 deve ser convertido na vogal "a"', () => {
    expect(decode('1n1')).toBe('ana');
  })
  it('Testa se a string retornada tem o mesmo numero de caractere do parametro', () => {
    expect(decode('1n1').length).toBe(3);
  })
});

//5 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

//6 - A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. 
//Implemente a função hydrate a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código.

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});