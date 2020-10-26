import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Menubar from './Menubar';

const HeaderLayout = styled.header`
  display: flex;
  background: #0c4da2;
  padding: 8px;
  @media only screen and (max-width: 420px) {
    & {
      padding: 4px;
    }
  }
`;

const Logo = styled.a`
  font-size: 32px;
  text-decoration: none;
  color: #fff;
  margin-left: 20px;
  @media only screen and (max-width: 420px) {
    & {
      font-size: 20px;
      margin-left: 32px;
    }
  }
`;

const Search = styled.input`
  background: #fff;
  width: 50%;
  margin: 0 auto;
  align-self: center;
  padding: 4px 16px;
  font-size: 20px;
  color: #333;
  outline: none;
  border: 0;
  @media only screen and (max-width: 420px) {
    & {
      padding: 2px 8px;
      font-size: 16px;
    }
  }
`;

const Header = (props) => {
  return (
    <>
      <HeaderLayout>
        <Logo href="/">JobsAlrt</Logo>
        <Search placeholder="Serach..." />
      </HeaderLayout>
      <Menubar />
    </>
  );
};

export default Header;
