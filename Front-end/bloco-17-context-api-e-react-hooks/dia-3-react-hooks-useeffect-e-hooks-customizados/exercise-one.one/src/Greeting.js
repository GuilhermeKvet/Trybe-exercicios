import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  function handleChange({ target }) {
    setName(target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input onChange={ handleChange } id="name" />
        </label>
      </form>
      {name ? <strong>{ `Hello ${name}` }</strong> : 'Please type your name'}
    </div>
  );
}

export default Greeting;
