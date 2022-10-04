import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango com a diagonal maior 32cm e a menor com 18cm: ${Exercise.diamond(32, 18)}cm²`);
console.log(`Losango com a diagonal maior 200cm e a menor com 50cm: ${Exercise.diamond(200, 50)}cm²`);
console.log(`Losango com a diagonal maior 75cm e a menor com 25cm: ${Exercise.diamond(75, 25)}cm²`);

console.log(`Trapezio com a altura 100cm, base maior de 70cm e base menor de 50cm : ${Exercise.trapeze(100, 70, 50)}cm²`);
console.log(`Trapezio com a altura 75cm, base maior de 50cm e base menor de 35cm : ${Exercise.trapeze(75, 50, 35)}cm²`);
console.log(`Trapezio com a altura 150cm, base maior de 120cm e base menor de 80cm : ${Exercise.trapeze(150, 120, 80)}cm²`);

console.log(`Circulo com o raio de 25cm: ${Exercise.circle(25)}cm²`);
console.log(`Circulo com o raio de 100cm: ${Exercise.circle(100)}cm²`);
console.log(`Circulo com o raio de 12.5cm: ${Exercise.circle(12.5)}cm²`);
