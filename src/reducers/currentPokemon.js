import { SET_CURRENT_POKEMON } from '../actions';

const defaultState = {
  id: 0,
  name: '',
  img: ''
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

