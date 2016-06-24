import React, { Component } from 'react';
import PokemonList from './PokemonList';

const pokemons = [
  {
    id: 1,
    name: 'Bulbasaur'
  }
];

const App = () => <PokemonList
  pokemons={pokemons}
  onPokemonClick={() => undefined}
/>

export default App;
