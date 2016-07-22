import { SET_SEARCH_TERM } from '../actions/actionTypes';

export default (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.term;
    default: 
      return state
  }
};

