"use strict";
const readline = require("readline-sync");
const units = ["km2", "hm2", "dm2", "m2", "dm2", "cm2", "mm2"];
const convert = (value, fromUnit, toUnit) => {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(100, exponent);
};
function exec() {
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a conversão:");
    const fromUnitChoice = units[fromUnitChoiceIndex];
    const toUnitChoice = units[toUnitChoiceIndex];
    const result = convert(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
