import React, { Component } from 'react';
import Spinner from './Spinner';

class PokemonPage extends Component {
  componentDidMount() {
    const { pokemonId } = this.props.params;
    this.props.actions.fetchPokemon(pokemonId);
  }

  render() {
    const { isFetchingPokemon, pokemon, params } = this.props;

    return (
      <div>
        {isFetchingPokemon && <Spinner />}
        {!isFetchingPokemon &&
          <p>{pokemon.name}</p>
        }
      </div>
    );
  }
};

export default PokemonPage;
