// Adicao
const a = 10;
const b = 20;
resultado=a+b;
console.log(resultado)

// Subtracao
const a = 10;
const b = 20;
resultado=a-b;
console.log(resultado)

// Multiplicacao
const a = 10;
const b = 20;
resultado=a*b;
console.log(resultado)

//Divisao
const a = 10;
const b = 20;
resultado=a/b;
console.log(resultado)

//Modulo
const a = 10;
const b = 20;
resultado=a%b;
console.log(resultado)

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const x = 5;
const y = 10;

if(x>y){
    console.log(x)
}else{
    console.log(y)
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const x = 60;
const y = 70;
const z = 50;

if(x > y && x > z){
    console.log(x)
}
else if(y > x && y > z){
    console.log(y)
}else{
    console.log(z)
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const valor = -1;

if(valor > 0){
    console.log("positive");
}else if(valor == 0){
    console.log("zero");
}else{
    console.log("negative");
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
