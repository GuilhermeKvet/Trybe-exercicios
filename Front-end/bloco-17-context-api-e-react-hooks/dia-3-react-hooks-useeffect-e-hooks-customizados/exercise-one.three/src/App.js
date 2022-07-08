import React, { useState } from 'react';
import FavoriteAnimal from './FavoriteAnimal';

function App() {
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');

  const onAnimalChange = ({ target }) => {
    setAnimal(target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            value={ name }
            onChange={ (event) => setName(event.target.value) }
          />
        </label>
      </div>
      <FavoriteAnimal animal={ animal } onAnimalChange={ onAnimalChange } />
      <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
    </form>
  );
}

export default App;
