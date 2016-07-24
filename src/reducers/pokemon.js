import { RECEIVE_POKEMON } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

