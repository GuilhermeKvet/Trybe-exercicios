//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const fun = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().replace(' ', '_');
  return {
    nomeCompleto,
    email: `${email}@trybe.com`
  };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Guilherme Kvet'),
    id2: callback('Edoarda Depine'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(fun));

//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkDraw = (number, draw) => draw === number;

const drawResult = (number, callback) => {
  const draw = Math.floor((Math.random() * 5) + 1);

  return callback(number, draw) ? `Parabéns você ganhou` : `Tente novamente`;
}

console.log(drawResult(5, checkDraw));

//3 - Crie uma HOF que receberá três parâmetros:
//O primeiro será um array de respostas corretas (Gabarito);
//O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
//O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
//Uma resposta correta adiciona 1 ponto à pontuação final;
//A ausência de uma resposta não altera a pontuação (quando for "N.A");
//Uma resposta incorreta reduz a pontuação final em 0.5 ponto. Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (rightAnswers, answers) => {
  if (rightAnswers === answers){
    return 1;
  }
  if( answers === NaN){
    return 0
  }
  return 0.5
}

const studentGrade = (rightAnswers, answers, callback) => {
  rightAnswers.forEach(element => {
    
  });
}

