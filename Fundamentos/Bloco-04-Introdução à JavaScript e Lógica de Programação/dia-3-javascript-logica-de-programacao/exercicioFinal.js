//1-Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorialDeDez = 1;

for(index = 10; index > 0; index -= 1){
    fatorialDeDez *= index;
}
console.log(fatorialDeDez);

//2-Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let palavraInversa = '';

for(index = 0; index < word.length; index += 1){
    palavraInversa += word[word.length - 1 - index];
}
console.log(palavraInversa)

//3-Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for(index = 0; index < array.length; index += 1){
    if(array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
    if(array[index].length < menorPalavra.length)
    menorPalavra = array[index];
}
console.log(maiorPalavra, menorPalavra)

//4-Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorNumeroPrimos = 0;

for (let numeroAtual = 0; numeroAtual <= 50; numeroAtual += 1) {
    let ehPrimo = true;
    for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1) {
        if (numeroAtual % divisorAtual === 0) {
            ehPrimo = false;
        }
    }
    if (ehPrimo) {
        maiorNumeroPrimos = numeroAtual;
    }
}
console.log(maiorNumeroPrimos)


