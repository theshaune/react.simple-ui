import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const HeaderNavigation = ({ nav, state }) => (
  <Wrapper>
    <span>{ JSON.stringify(state) }</span>
    {nav.map(({ name, link, id }) => <Link key={id} to={link}>{name}</Link>)}
  </Wrapper>
);

HeaderNavigation.defaultProps = {
  nav: [],
  state: {}
};

HeaderNavigation.propTypes = {
  nav: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default HeaderNavigation;
