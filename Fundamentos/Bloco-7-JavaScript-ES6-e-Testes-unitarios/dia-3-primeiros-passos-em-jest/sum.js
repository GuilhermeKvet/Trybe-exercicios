function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(stringNumerica) {
  for (index = 0; index < stringNumerica.length; index += 1) {
    stringNumerica = stringNumerica.replace('a', 1);
    stringNumerica = stringNumerica.replace('e', 2);
    stringNumerica = stringNumerica.replace('i', 3);
    stringNumerica = stringNumerica.replace('o', 4);
    stringNumerica = stringNumerica.replace('u', 5);
  }
  return stringNumerica;
}

function decode(stringCode) {
  for (index = 0; index < stringCode.length; index += 1) {
    stringCode = stringCode.replace(1, 'a');
    stringCode = stringCode.replace(2, 'e');
    stringCode = stringCode.replace(3, 'i');
    stringCode = stringCode.replace(4, 'o');
    stringCode = stringCode.replace(5, 'u');
  }
  return stringCode;
}

const techList = (array, name) => {
  const arrayOrdenado = array.sort();
  const arrayObject = [];

  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    arrayObject.push({ tech: array[index], name: name });
  }
  if (array.length === 0) {
    return 'Vazio!'
  }
  return arrayObject;
}

function hydrate(string) {
  const stringOrdenada = string.split("");
  let numeros = 0;

  for (index = 0; index < stringOrdenada.length; index += 1) {
    const parsedCharacter = parseInt(stringOrdenada[index]);

    if (isNaN(parsedCharacter) === false) {
      numeros += parsedCharacter;
    }
  }
  if (numeros === 1) {
    return `${numeros} copo de água`;
  }
  return `${numeros} copos de água`;
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate };