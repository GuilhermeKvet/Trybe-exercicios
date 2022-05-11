import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className='pokemon'>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>AverageWeight: {`${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        <img src={image} alt={name} />
      </div>
    )
  }
}

export default Pokemon;
