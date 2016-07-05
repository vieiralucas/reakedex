import { REQUEST_POKEMONS, RECEIVE_POKEMONS } from '../actions';

export default (state = false, action) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return true;
    case RECEIVE_POKEMONS:
      return false;
    default:
      return state;
  }
};

