import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';

const Wrapper = styled.div`
  display: flex;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Header = ({ logo, nav }) => (
  <Wrapper>
    <Container>

      <HeaderLogo logo={logo} />
      <HeaderNavigation nav={nav} />
    </Container>
  </Wrapper>
);

Header.defaultProps = {
  logo: null,
  nav: []
};

Header.propTypes = {
  logo: React.PropTypes.string,
  nav: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Header;
