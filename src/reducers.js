import { REQUEST_POKEMONS, RECEIVE_POKEMONS, SET_SEARCH_TERM } from './actions';
import { combineReducers } from 'redux';

const pokemons = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POKEMONS:
      return action.pokemons;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return true;
    case RECEIVE_POKEMONS:
      return false;
    default:
      return state;
  }
};

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.term;
    default: 
      return state
  }
};

const rootReducer = combineReducers({
  pokemons,
  isFetching,
  searchTerm
});

export default rootReducer;
