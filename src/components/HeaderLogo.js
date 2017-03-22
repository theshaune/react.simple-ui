import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
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
