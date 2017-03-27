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

const Header = ({...props}) => (
  <Wrapper>
    <Container>
      <span onClick={props.toggle}>{ JSON.stringify(props) }</span>
      <HeaderLogo {...props} />
      <HeaderNavigation {...props} />
    </Container>
  </Wrapper>
);

export default Header;
