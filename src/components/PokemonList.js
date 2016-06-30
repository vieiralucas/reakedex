import React, { PropTypes } from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons, onPokemonClick }) => (
  <ul className="pokemon-list">
    {pokemons.map(pokemon =>
      <PokemonItem
        key={pokemon.id}
        name={pokemon.name}
        {...pokemon}
        onClick={() => onPokemonClick(pokemon.id)}
      />
    )}
  </ul>
);

export default PokemonList;
