import { RECEIVE_POKEMONS } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POKEMONS:
      return action.pokemons;
    default:
      return state;
  }
};

