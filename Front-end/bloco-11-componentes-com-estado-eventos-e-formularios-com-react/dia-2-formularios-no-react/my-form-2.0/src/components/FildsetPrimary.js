import React from 'react';

class FildsetPrimary extends React.Component {
render() {
  const { name, handlerChange } = this.props;
  return (
    <label htmlFor='nameInput'>Nome:
      <input
        type="text"
        id='nameInput'
        maxLength='40'
        name={name}
        onChange={handlerChange}
      />
    </label>
  );
}
}

export default FildsetPrimary;