import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLayout = styled.nav`
  display: flex;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #0c4da2;
  background: #eee;
  padding: 0 16px;
  margin-top: 32px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  & a {
    text-decoration: none;
    padding: 8px 32px;
    color: #0c4da2;
  }
  & .active {
    border: 1px solid #0c4da2;
    background: #ccc;
    border-bottom: 1px solid #ccc;
    margin-bottom: -1px;
  }
  @media only screen and (max-width: 420px) {
    & {
      padding: 0 4px;
      margin-top: 4px;
      font-size: 14px;
    }
    & a {
      padding: 2px 8px;
    }
  }
`;

const HomeNavBar = () => {
  return (
    <NavLayout>
      <NavLink to="/home" activeClassName="active" exact>
        Category Wise
      </NavLink>
      <NavLink to="/home/location">Location Wise</NavLink>
      <NavLink to="/home/company">Department / Company Wise</NavLink>
      <NavLink to="/home/qualification">Qualification Wise</NavLink>
    </NavLayout>
  );
};

export default HomeNavBar;
