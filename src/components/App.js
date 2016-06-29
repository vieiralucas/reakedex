import React, { Component } from 'react';
import PokemonList from './PokemonList';

const pokemons = [
  {
    id: 1,
    name: 'Bulbasaur',
    img: 'http://pokeapi.co/media/sprites/pokemon/1.png'
  },
  {
    id: 2,
    name: 'Ivysaur',
    img: 'http://pokeapi.co/media/sprites/pokemon/2.png'
  },
  {
    id: 3,
    name: 'Venusaur',
    img: 'http://pokeapi.co/media/sprites/pokemon/3.png'
  },
  {
    id: 4,
    name: 'Charmander',
    img: 'http://pokeapi.co/media/sprites/pokemon/4.png'
  },
  {
    id: 5,
    name: 'Charmeleon',
    img: 'http://pokeapi.co/media/sprites/pokemon/5.png'
  },
  {
    id: 6,
    name: 'Charizard',
    img: 'http://pokeapi.co/media/sprites/pokemon/6.png'
  }
];

const App = () => <PokemonList
  pokemons={pokemons}
  onPokemonClick={() => undefined}
/>

export default App;
