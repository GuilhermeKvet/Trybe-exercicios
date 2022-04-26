const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => {
  const nameAndAverage = students.map((nome, index) => ({
    name: nome,
    average: (grades[index].reduce((acc, nota) => acc + nota, 0) / grades[index].length),
  }));
  return nameAndAverage;
}
console.log(studentAverage());