function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criarDiaDoMes() {

  for (index = 1; index < dezDaysList.length; index += 1) {
    let diaDoMes = document.createElement('li');
    diaDoMes.innerHTML = index;
    diaDoMes.className = 'day';
    days.appendChild(diaDoMes);
  }
  dia = dezDaysList[index];
  if(dia === 24 || dia === 25 || dia === 31){
    diaDoMes.className = 'day holiday';
  }
  
  
}