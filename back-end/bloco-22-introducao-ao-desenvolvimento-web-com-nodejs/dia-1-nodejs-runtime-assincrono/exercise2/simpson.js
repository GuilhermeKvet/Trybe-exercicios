const fs = require('fs').promises;

const readAll = async() => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  simpsons.map(({ id, name }) => console.log(`${id} - ${name}`));
}

const main = async() => {
  await readAll();
}

main();