

const fetchCripto = async () => {
  const url = 'https://api.coincap.io/v2/assets';

   const coins = await fetch(url)
    .then(response => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return coins;
}

const createElement = async () => {
  const coins = await fetchCripto();
  const getContainer = document.getElementById('criptoContainer');

  coins.forEach((coin) => {
    const createLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);
    createLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
    getContainer.appendChild(createLi);
  });
}

window.onload = createElement();