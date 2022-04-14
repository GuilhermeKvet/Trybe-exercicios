// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'ameixa', 'melancia'];


// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condencado', 'leite ninho', 'chocolate'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));