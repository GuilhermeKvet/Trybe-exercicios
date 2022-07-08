import React from 'react';
import PropTypes from 'prop-types';

// 🐨 receba `animal` e `onAnimalChange` como  props nesse componente
function FavoriteAnimal({ animal, onAnimalChange }) {
  return (
    <div>
      <label htmlFor="animal">
        Favorite Animal:
        <input
          id="animal"
          value={ animal }
          onChange={ onAnimalChange }
        />
      </label>
    </div>
  );
}

FavoriteAnimal.propTypes = {
  animal: PropTypes.string.isRequired,
  onAnimalChange: PropTypes.func.isRequired,
};

export default FavoriteAnimal;
