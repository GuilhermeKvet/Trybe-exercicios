const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (arr) => {
  return arr.reduce((acc, name) => acc + name.split('').reduce((count, letter) => {
    if (letter === 'a' || letter === 'A'){
      return count + 1;
    }
    return count
  }, 0), 0);
}

console.log(containsA(names));