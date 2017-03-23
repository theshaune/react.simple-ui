const initialState = {
  isOpen: false
};

function navigation(state = initialState, action) {
  switch (action.type) {
    case 'NAVIGATION_TOGGLE_SIDEBAR':
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
}

export default navigation;
