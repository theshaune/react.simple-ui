import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  
  img {
    width: 100px;
  }
`;

const HeaderLogo = ({ logo }) => {
  if (!logo) return null;

  return (
    <Wrapper>
      <img src={logo} className="imgSrc" alt="logo" />
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
