import { combineReducers } from 'redux';
import page from './page';
import currentPokemon from './currentPokemon';
import pokemons from './pokemons';
import isFetching from './isFetching';
import searchTerm from './searchTerm';

const rootReducer = combineReducers({
  page,
  currentPokemon,
  pokemons,
  isFetching,
  searchTerm
});

export default rootReducer;
