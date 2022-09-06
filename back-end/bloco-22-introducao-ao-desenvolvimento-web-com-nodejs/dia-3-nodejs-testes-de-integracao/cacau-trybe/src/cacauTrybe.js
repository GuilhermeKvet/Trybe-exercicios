const fs = require('fs').promises;
const { join } = require('path');

const path = 'files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
    try {
        const completePath = join(__dirname, path);
        const contentFile = await fs.readFile(completePath, 'utf-8');
        return JSON.parse(contentFile);
    } catch (error) {
      console.error('Erro ao abrir o arquivo', error.message);
      return;
    }
}

const getAllChocolates = async () => {
    const data = await readCacauTrybeFile();
    return data.chocolates;
}

const getChocolateById = async (id) => {
    const data = await readCacauTrybeFile();
    return data.chocolates.filter((chocolate) => chocolate.id === id);
}

const getChocolatesByBrand = async (brandId) => {
    const data = await readCacauTrybeFile();
    return data.chocolates.filter((chocolate) => chocolate.brandId === brandId);
}

const findChocolateByName = async (query) => {
    const cacaoTrybe = await readCacauTrybeFile();
    return cacaoTrybe.chocolates
      .filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
};

const writeCacauTrybe = async (content) => {
    try {
        const completePath = join(__dirname, path);
        await fs.writeFile(completePath, JSON.stringify(content));
    } catch (error) {
        console.error('Erro ao abrir o arquivo', error.message);
        return;
    }
}

const updateChocolate = async (id, update) => {
  const cacaoTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = await cacaoTrybe.chocolates.find((chocolate) => chocolate.id === id);
  
    if (chocolateToUpdate) {
      cacaoTrybe.chocolates[chocolateToUpdate.id - 1] = {...chocolateToUpdate, ...update};
      await writeCacauTrybe(cacaoTrybe);
      return { ...chocolateToUpdate, ...update };
    }
  return false;
};

const createChocolate = async ({name, brandId}) => {
    const data = await readCacauTrybeFile();
    const newChocolates = {
        id: data.nextChocolateId,
        name,
        brandId
    };
    data.chocolates.push(newChocolates);
    data.nextChocolateId += 1;
    await writeCacauTrybe(data);
    return newChocolates;
}

module.exports = {
    getAllChocolates,
    createChocolate,
    getChocolateById,
    getChocolatesByBrand,
    updateChocolate,
    findChocolateByName,
}