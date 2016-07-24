import { REQUEST_POKEMON, RECEIVE_POKEMON } from '../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case REQUEST_POKEMON:
      return true;
    case RECEIVE_POKEMON:
      return false;
    default:
      return state;
  }
};

