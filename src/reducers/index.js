import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import pokemons from './pokemons';
import isFetchingPokemons from './isFetchingPokemons';
import isFetchingPokemon from './isFetchingPokemon';
import pokemon from './pokemon';
import searchTerm from './searchTerm';

const rootReducer = combineReducers({
  pokemons,
  isFetchingPokemons,
  pokemon,
  isFetchingPokemon,
  searchTerm,
  routing: routerReducer
});

export default rootReducer;
