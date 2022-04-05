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

const orderElements = (array) => array.sort((a,b) => a - b);

console.log(orderElements(oddsAndEvens));

//3 - Crie uma função que receba um número e retorne seu fatorial.
//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorialNumber = (n) => {
    let resultado = n;
    for (let index = 0; index < n; index += 1){
        resultado *= index;
    }
};
console.log(fatorialNumber(5));

//4 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggestWord = (phrase) => {
    for (let index = 0; index < phrase.length; index += 1){
        
    }
}