import { SET_PAGE } from '../actions';

export default (state = 'home', action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
};

