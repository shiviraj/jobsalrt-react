import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  background: #eee;
  box-shadow: 0 2px 4px #0c4da2ef;
`;

const Link = styled(NavLink)`
  color: #333;
  padding: 4px 16px;
  text-decoration: none;
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
`;

const Menubar = () => {
  return (
    <Nav>
      <Link to="/" exact>
        Home
      </Link>
      <Link to="/all-jobs">All Jobs</Link>
      <Link to="/latest-jobs">Latest Jobs</Link>
      <Link to="/admit-card">Admit Card</Link>
      <Link to="/results">Results</Link>
      <Link to="/answer-key">Answer Key</Link>
      <Link to="/syllabus">Syllabus</Link>
      <Link to="/admission">Admission</Link>
      <Link to="/post/5f5f547fe879dc190f9e927c">Post</Link>
    </Nav>
  );
};

export default Menubar;
