import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import pokemons from './pokemons';
import isFetching from './isFetching';
import searchTerm from './searchTerm';

const rootReducer = combineReducers({
  pokemons,
  isFetching,
  searchTerm,
  routing: routerReducer
});

export default rootReducer;
