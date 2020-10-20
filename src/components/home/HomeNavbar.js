import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import category from '../../media/icons/category.png';
import location from '../../media/icons/location.png';
import company from '../../media/icons/company.png';
import qualification from '../../media/icons/qualification.png';

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
    display: flex;
    align-items: center;
  }
  & a img {
    display: none;
    height: 32px;
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
    & a img {
      display: block;
    }
    & a span {
      display: none;
    }
  }
`;

const HomeNavBar = () => {
  return (
    <NavLayout>
      <NavLink to="/home" activeClassName="active" exact>
        <img src={category} alt="Category" />
        <span>Category Wise</span>
      </NavLink>
      <NavLink to="/home/location">
        <img src={location} alt="Location" />
        <span>Location Wise</span>
      </NavLink>
      <NavLink to="/home/company">
        <img src={company} alt="Company" />
        <span>Department / Company Wise</span>
      </NavLink>
      <NavLink to="/home/qualification">
        <img src={qualification} alt="Qualification" />
        <span>Qualification Wise</span>
      </NavLink>
    </NavLayout>
  );
};

export default HomeNavBar;
