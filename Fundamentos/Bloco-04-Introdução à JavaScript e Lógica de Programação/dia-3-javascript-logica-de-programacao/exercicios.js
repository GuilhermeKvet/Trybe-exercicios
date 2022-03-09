// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

let somaValores = 0;

for (let index = 1; index <= 50; index += 1) {
    somaValores += index;
}
console.log('A soma de 1 a 50 e: ' + somaValores);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let numeros = 0;

for(index = 2; index <= 150; index += 1){
    if(index % 3 === 0);
    numeros += 1;
}
if(numeros === 50){
    console.log('Mensagem secreta');
}
console.log(numeros)

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "pedra";
let player2 = "papel";

if(player1 === 'pedra' && player2 === 'tesoura'){
    console.log('Player 1 won')
}else if(player1 === 'pedra' && player2 === 'papel'){
    console.log('Player 2 won')
}else if(player1 === 'pedra' && player2 === 'pedra'){
    console.log('A Ties')
}else if(player1 === 'papel' && player2 === 'papel'){
    console.log('A Ties')
}else if(player1 === 'papel' && player2 === 'tesoura'){
    console.log('Player 2 won')
}else if(player1 === 'papel' && player2 === 'pedra'){
    console.log('Player 1 won')
}else if(player1 === 'tesoura' && player2 === 'papel'){
    console.log('Player 1 won')
}else if(player1 === 'tesoura' && player2 === 'pedra'){
    console.log('Player 2 won')
}else if(player1 === 'tesoura' && player2 === 'tesoura'){
    console.log('A Ties')
}

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let pessoa1 = 15;

if (pessoa1 < 18) {
console.log("A pessoa é menor de idade.");
}else {
console.log("A pessoa é maior de idade.")
} 

//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.
let idadeManu = 25;
let idadeAna = 28;
let idadeRonald = 35;

if (idadeManu < idadeAna && idadeManu < idadeRonald) {
console.log("'Manu' é a mais nova.");
} else if (idadeAna < idadeManu && idadeAna < idadeRonald) {
console.log("'Ana' é a mais nova.");
} else if (idadeRonald < idadeAna && idadeRonald < idadeManu) {
console.log("'Ronald' é a mais nova.");
}; 