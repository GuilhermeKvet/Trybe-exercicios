//Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

//Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
let atleta = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        golden: 2,
        silver: 3,
    }
}

//Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log('A jogadora ' + atleta.name + ' tem ' + atleta.age + ' anos de idade');

//Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log('A jogadora ' + atleta.name +' foi eleita ' + atleta.bestInTheWorld.length + ' vezes');

//Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log('A jogadora possui ' + atleta.medals.golden + ' medalhas de ouro e ' + atleta.medals.silver + ' medalhas de prata');