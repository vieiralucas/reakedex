import { REQUEST_POKEMONS, RECEIVE_POKEMONS } from './actions';
import { combineReducers } from 'redux';

const defaultPokemonsState = {
  isFetching: false,
  pokemons: []
};

const pokemons = (state = defaultPokemonsState, action) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POKEMONS:
      return {
        ...state,
        isFetching: false,
        pokemons: action.pokemons
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({pokemons});

export default rootReducer;
