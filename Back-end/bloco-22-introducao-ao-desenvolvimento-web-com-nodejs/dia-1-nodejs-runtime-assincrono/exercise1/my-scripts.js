const readLine = require('readline-sync');
const { bmiCalc } = require('./bmi');

const weigth = readLine.questionFloat("What' your weight?");
const height = readLine.questionFloat("What' your height?");

const bmiResult = bmiCalc(weigth, height);

console.log(bmiResult);