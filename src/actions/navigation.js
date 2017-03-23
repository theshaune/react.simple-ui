export const NAVIGATION_TOGGLE_SIDEBAR = 'NAVIGATION_TOGGLE_SIDEBAR';

function toggleNavigation(status) {
  return {
    type: NAVIGATION_TOGGLE_SIDEBAR
  };
}

export default toggleNavigation;
