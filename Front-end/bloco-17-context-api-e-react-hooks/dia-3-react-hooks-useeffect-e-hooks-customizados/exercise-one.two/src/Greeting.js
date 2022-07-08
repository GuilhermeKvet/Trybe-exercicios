import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Greeting({ initialName = '' }) {
  // 🐨 inicialize o estado com o valor que vem do localStorage
  const localStorageName = window.localStorage.getItem('name') || initialName;
  const [name, setName] = useState(localStorageName);

  // 🐨 Utilize o hook useEffect para atualizar a
  // propriedade `name` no localStorage quando o estado for alterado
  useEffect(() => window.localStorage.setItem('name', name), [name]);

  function handleChange({ target: { value } }) {
    setName(value);
  }

  return (
    <div>
      <form onSubmit={ (event) => event.preventDefault() }>
        <label htmlFor="name">
          Name:
          <input onChange={ handleChange } id="name" />
        </label>
      </form>
      { name ? <strong>{ `Hello ${name}` }</strong> : 'Please type your name' }
    </div>
  );
}

export default Greeting;

Greeting.propTypes = {
  initialName: PropTypes.string,
};

Greeting.defaultProps = {
  initialName: '',
};
