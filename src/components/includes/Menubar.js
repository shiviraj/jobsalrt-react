import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import menu from '../../media/icons/menu.png';

const Layout = styled.div``;
const Home = styled.div`
  display: none;
  margin-top: -28px;
  & img {
    height: 20px;
    padding: 2px;
    margin-left: 4px;
    filter: invert(1);
  }
  @media only screen and (max-width: 420px) {
    & {
      display: block;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  background: #eee;
  box-shadow: 0 2px 4px #0c4da2ef;
  @media only screen and (max-width: 420px) {
    & {
      position: absolute;
      flex-direction: column;
      width: 100%;
      height: 100%;
      display: none;
    }
    &.open {
      display: block;
    }
  }
`;

const Link = styled(NavLink)`
  color: #333;
  padding: 4px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    background: #c4c4c4;
  }
  &.active {
    font-weight: 900;
    color: #0c4da2;
    background: #aaa;
  }
  &:first-child {
    margin-left: 20px;
  }
  @media only screen and (max-width: 420px) {
    &:first-child {
      margin-left: 0;
    }
  }
`;

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <Home onClick={() => setIsOpen(!isOpen)}>
        <img src={menu} />
      </Home>
      <Nav className={isOpen ? 'open' : ''} onClick={() => setIsOpen(!isOpen)}>
        <Link to="/home">Home</Link>
        <Link to="/all-jobs">All Jobs</Link>
        <Link to="/latest-jobs">Latest Jobs</Link>
        <Link to="/admit-card">Admit Card</Link>
        <Link to="/results">Results</Link>
        <Link to="/answer-key">Answer Key</Link>
        <Link to="/syllabus">Syllabus</Link>
        <Link to="/admission">Admission</Link>
      </Nav>
    </Layout>
  );
};

export default Menubar;
