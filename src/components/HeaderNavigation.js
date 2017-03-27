import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-left: 1rem;
`;

const HeaderNavigation = ({ nav, toggle }) => (
  <Wrapper>
    <List>
      {nav.map(({ name, link, id }) => (
        <ListItem key={id}>
          <Link to={link}>{name}</Link>
        </ListItem>
      ))}
      <ListItem>
        <button onClick={toggle}>Menu</button>
      </ListItem>
    </List>
  </Wrapper>
);

HeaderNavigation.defaultProps = {
  nav: []
};

HeaderNavigation.propTypes = {
  nav: React.PropTypes.arrayOf(React.PropTypes.object),
  toggle: React.PropTypes.func.isRequired
};

export default HeaderNavigation;
