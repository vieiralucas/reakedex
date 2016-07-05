import React, { PropTypes } from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons, filter, onPokemonClick }) => (
  <ul className="pokemon-list">
    {pokemons
      .filter(pokemon => pokemon.name.toLowerCase().includes(filter.toLowerCase()))
      .map(pokemon =>
        <PokemonItem
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          {...pokemon}
          onClick={() => onPokemonClick(pokemon.id)}
        />
      )}
  </ul>
);

export default PokemonList;
