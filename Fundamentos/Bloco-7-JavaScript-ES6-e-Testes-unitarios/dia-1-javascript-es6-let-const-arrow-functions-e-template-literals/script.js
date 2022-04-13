//1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
//Modifique a estrutura da função para que ela seja uma arrow function .
//Modifique as concatenações para template literals .

// function testingScope(escopo) {
//     if (escopo === true) {
//         var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//         console.log(ifScope);
//     } else {
//         var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

//Nova versao da function

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
//Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
//Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderElements = (array) => array.sort((a, b) => a - b);

console.log(orderElements(oddsAndEvens));

//3 - Crie uma função que receba um número e retorne seu fatorial.
//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorialNumber = (n) => {
  let resultado = n;
  for (let index = 1; index < n; index += 1) {
    resultado *= index;
  }
  return resultado;
}
console.log(fatorialNumber(7));

//4 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggestWord = (phrase) => {
  let wordArray = phrase.split(' ');
  let bigger = 0;
  let word = '';

  for (let index = 0; index < wordArray.length; index += 1) {
    if (wordArray[index].length > bigger) {
      bigger = wordArray[index].length;
      word = wordArray[index];
    }
  }
  return word;
}
console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//5 - Crie uma página que contenha: Um botão ao qual será associado um event listener, uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão e um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const button = document.getElementById('button');
const text = document.getElementById('text');
const reset = document.getElementById('reset');
let click = 0;

const clickCounter = () => {
  click++;
  text.innerText = `Voce clicou ${click} vezes`;
}

const resetClicks = () => {
  click = 0;
  text.innerText = `Voce clicou ${click} vezes`;
}

button.addEventListener('click', clickCounter);
reset.addEventListener('click', resetClicks);

//4 - Crie um código JavaScript com a seguinte especificação: 
//Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
//Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const array = ['git', 'html', 'css', 'JavaScript', 'DOM'];

function buildSkillsPhrase(paramOne) {
  const searchX = (string) => {
    const phrase = 'Tryber x aqui!'
    let arrayPhrase = phrase.split(' ');
    let newPhrase = [];

    for (let index in arrayPhrase) {
      if (arrayPhrase[index] === 'x') {
        arrayPhrase[index] = string;
      }
      newPhrase.push(arrayPhrase[index]);
    }
    return newPhrase.join(' ');
  }

  let result = `${searchX(paramOne)} 
  Minhas cinco principais habilidades são:`;

  array.forEach((skill) =>
    result = `${result}

  - ${skill}`);

  result = `
  ${result}

  #goTrybe
  `;

  return result;
}

console.log(buildSkillsPhrase("Guilherme"));



