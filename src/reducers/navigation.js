import { NAVIGATION_TOGGLE_SIDEBAR } from '../actions/actionTypes';

const initialState = {
  isOpen: false
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case NAVIGATION_TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
}
