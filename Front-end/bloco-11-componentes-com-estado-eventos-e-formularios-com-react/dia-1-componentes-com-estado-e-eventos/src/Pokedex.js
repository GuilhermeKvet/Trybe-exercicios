import React from 'react';
import Pokemon from './Pokemon';
import './pokedex.css';

class Pokedex extends React.Component {

  state = {
    pokemons: this.props.pokemons,
    myListPokemons: this.props.pokemons,
    filter: '',
    currentIndex: 0,
  };

  next = () => {

    this.setState((prevState) => {
      let nextIndex = prevState.currentIndex + 1;
      if (prevState.myListPokemons.length - 1 === prevState.currentIndex)
        nextIndex = 0;
      return {
        currentIndex: nextIndex,
      }
    })
  }

  haveMoreThanOne = () => {
    return this.state.myListPokemons.length > 1;
  }

  filterTypePokemon(filter) {
    this.setState({
      filter: filter,
      myListPokemons: this.state.pokemons.filter((pokemon) => {
        if (!filter) {
          return true
        }
        return pokemon.type === filter
      }),
      currentIndex: 0
    })
  }

  getTypePokemon = () => {
    const types = this.state.pokemons.map((pokemon) => pokemon.type)
    return [...new Set(types)].sort()
  }

  render() {
    const { myListPokemons, currentIndex } = this.state;
    return (
      <div>
        <div>
          <button onClick={() => this.filterTypePokemon('')}>All</button>
          {this.getTypePokemon().map((pokemonType) =>
            (<button key={pokemonType} onClick={() => this.filterTypePokemon(pokemonType)}>{pokemonType}</button>)
          )}
        </div>
        <div className="pokedex">
          <Pokemon key={myListPokemons[currentIndex].id} pokemon={myListPokemons[currentIndex]} />
        </div>
        <div>
          <button
            onClick={this.next}
            disabled={!this.haveMoreThanOne()}
          >Próximo</button>
        </div>
      </div >

    );
  }
}

export default Pokedex;