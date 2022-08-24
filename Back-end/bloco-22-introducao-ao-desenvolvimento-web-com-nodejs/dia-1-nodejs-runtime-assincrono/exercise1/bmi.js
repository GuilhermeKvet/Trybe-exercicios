const bmiCalc = (weigth, height) => {
  const bmi = weigth / (height ^ 2);

  if (bmi < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  }
  if (18.5 >= bmi && bmi < 24.9) {
    console.log('Peso normal');
    return;
  }
  if (30 >= bmi && bmi <= 34.9) {
    console.log('Obesidade grau I');
    return;
  }
  if (35 >= bmi && bmi <= 39.9) {
    console.log('Obesidade grau II');
    return;
  }
  console.log('Obesidade graus III e IV');
}

module.exports = {bmiCalc};