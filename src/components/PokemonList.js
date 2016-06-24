import React, { PropTypes } from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons, onPokemonClick }) => (
  <ul>
    {pokemons.map(pokemon =>
      <PokemonItem
        name={pokemon.name}
        {...pokemon}
        onClick={() => onPokemonClick(pokemon.id)}
      />
    )}
  </ul>
);

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onPokemonClick: PropTypes.func.isRequired
};

export default PokemonList;
