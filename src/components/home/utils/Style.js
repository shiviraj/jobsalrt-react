import styled from 'styled-components';

const Section = styled.section`
  border: 1px solid #0c4da2;
  margin: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 420px) {
    & {
      margin: 8px 4px;
    }
  }
`;

const Layout = styled.section`
  display: flex;
  flex-wrap: wrap;
  & a {
    border: 1px solid #0c4da2;
    margin: 8px 16px;
    padding: 8px 16px;
    background: #eee;
    text-decoration: none;
    color: #0c4da2;
    @media only screen and (max-width: 420px) {
      & {
        margin: 2px;
        padding: 2px 4px;
      }
    }
  }
  & .active {
    background: #888;
    color: #fff;
  }
`;

const Title = styled.h1`
  background: #0c4da2;
  color: #fff;
  padding: 4px 16px;
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
`;

const Link = styled.a`
  border: 1px solid #0c4da2;
  margin: 8px 16px;
  padding: 8px 16px;
  background: #eee;
  text-decoration: none;
  color: #0c4da2;
  @media only screen and (max-width: 420px) {
    & {
      margin: 2px;
      padding: 2px 4px;
    }
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  & thead {
    font-weight: 600;
  }
`;

const Row = styled.tr``;
const Cell = styled.td`
  padding: 8px;
  border: 1px solid #0c4da2;
  & a {
    text-decoration: none;
    color: #0c4da2;
  }
  & a::after {
    content: ',  ';
  }
  & a:last-child::after {
    content: '';
  }
  & a:hover {
    text-decoration: underline;
    color: blue;
  }
  @media only screen and (max-width: 420px) {
    & {
      padding: 2px;
    }
    &.small {
      display: none;
    }
  }
`;

const Recently = styled.div`
  width: 100%;
  & section {
    justify-content: flex-start;
    background: #eee;
  }
  & section h1 {
    background: inherit;
    color: #333;
    font-weight: 600;
  }

  & section a {
    color: #0c4da2;
    text-decoration: none;
  }
  & section a:hover {
    text-decoration: underline;
  }
`;

const RecentLink = styled.div`
  width: 45%;
  margin-left: 48px;
  &::before {
    content: '• ';
    font-size: 20px;
  }
  @media only screen and (max-width: 420px) {
    & {
      width: 100%;
      margin-left: 16px;
    }
    &:last-child {
      display: none;
    }
    &:nth-last-child(2) {
      display: none;
    }
    &:nth-last-child(3) {
      display: none;
    }
    &:nth-last-child(4) {
      display: none;
    }
  }
`;

export { Section, Layout, Title, Link, Row, Cell, Table, Recently, RecentLink };
