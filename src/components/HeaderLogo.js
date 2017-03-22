import React from 'react';
import styled, { keyframes } from 'styled-components';

// CSS Animation
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const HeaderLogo = ({ logo }) => {
  if (!logo) return null;

  return (
    <Wrapper>
      <Img src={logo} className="imgSrc" alt="logo" />
    </Wrapper>
  );
};

HeaderLogo.defaultProps = {
  logo: null
};

HeaderLogo.propTypes = {
  logo: React.PropTypes.string
};

export default HeaderLogo;
