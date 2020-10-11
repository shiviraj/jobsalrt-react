import React from 'react';
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
      margin-left: 8px;
    }
  }
`;

const Search = styled.div`
  background: #fff;
  width: 50%;
  margin: 0 auto;
  align-self: center;
  padding: 4px 16px;
  font-size: 20px;
  color: #333;
  @media only screen and (max-width: 420px) {
    & {
      padding: 2px 8px;
      font-size: 16px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderLayout>
        <Logo href="/">JobsAlrt</Logo>
        <Search>search...</Search>
      </HeaderLayout>
      <Menubar />
    </>
  );
};

export default Header;
