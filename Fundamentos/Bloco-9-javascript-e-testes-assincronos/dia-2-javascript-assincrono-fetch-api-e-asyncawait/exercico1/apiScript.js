// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => createElement(data));
};

const createElement = (data) => {
  const getContainer = document.getElementById('jokeContainer');
  const createParagraph = document.createElement('p');
  createParagraph.innerHTML = data.joke;
  getContainer.appendChild(createParagraph);
}

window.onload = () => fetchJoke();