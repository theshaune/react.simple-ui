import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

  ul {
    list-style-type: none;
  }
  
  li {
    margin-left: 1rem;
  }
`;

const HeaderNavigation = ({ nav }) => (
  <Wrapper>
    ... working on it: {JSON.stringify(nav)}
  </Wrapper>
);

HeaderNavigation.defaultProps = {
  nav: []
};

HeaderNavigation.propTypes = {
  nav: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default HeaderNavigation;
