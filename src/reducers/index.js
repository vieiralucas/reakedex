import { combineReducers } from 'redux';
import pokemons from './pokemons';
import isFetching from './isFetching';
import searchTerm from './searchTerm';

const rootReducer = combineReducers({
  pokemons,
  isFetching,
  searchTerm
});

export default rootReducer;
