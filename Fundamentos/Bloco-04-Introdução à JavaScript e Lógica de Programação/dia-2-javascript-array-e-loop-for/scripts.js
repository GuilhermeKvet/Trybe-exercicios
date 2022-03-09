//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maxNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if(maxNumber < numbers[index]) {
    maxNumber = numbers[index];
  }
}

console.log(maxNumber);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,-1];
let lessNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if(lessNumber > numbers[index]){
      lessNumber = numbers[index]
  }
}

console.log(lessNumber);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}
console.log(numbers);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2;
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
}