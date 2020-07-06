import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/conflux-logo-dark.png';

const Logo = () => {
  return (
    <Styles>
      <img src={logo} alt="React-Conflux logo" />
    </Styles>
  );
};

const Styles = styled.div`
  width: 70%;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;

export default Logo;
