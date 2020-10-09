import React from 'react';
import styled from 'styled-components';

const HeaderLayout = styled.header`
  display: flex;
  background: #0c4da2;
  padding: 8px;
`;

const Logo = styled.div`
  font-size: 32px;
  color: #fff;
  margin-left: 20px;
`;

const Search = styled.div`
  background: #fff;
  width: 50%;
  margin: 0 auto;
  align-self: center;
  padding: 4px 16px;
  font-size: 20px;
  color: #333;
`;

const Header = () => {
  return (
    <HeaderLayout>
      <Logo>JobsAlrt</Logo>
      <Search>search...</Search>
    </HeaderLayout>
  );
};

export default Header;
