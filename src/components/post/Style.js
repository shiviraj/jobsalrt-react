import styled from 'styled-components';

const Section = styled.section`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid #0c4da2;
  border-collapse: collapse;
  margin: 32px;
  @media only screen and (max-width: 420px) {
    & {
      margin: 8px 4px;
    }
  }
`;

const Title = styled.h1`
  color: #fff;
  background: #0c4da2dd;
  padding: 4px;
  font-weight: 500;
  border: 1px solid #0c4da2;
  text-transform: capitalize;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const THead = styled.thead`
  border-bottom: 1px solid #0c4da2;
  background: #888;
  font-weight: 600;
`;

const TBody = styled.tbody``;

const Row = styled.tr`
  border-bottom: 1px solid #0c4da2;
  &:last-child {
    border-bottom: 0;
  }
  &:nth-of-type(2n) {
    background-color: #eee;
  }
`;

const Cell = styled.td`
  border-right: 1px solid #0c4da2;
  padding: 4px 16px;
  &:last-child {
    border-right: 0;
  }

  & a {
    text-decoration: none;
    color: #0c4da2;
    margin-right: 4px;
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
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #0c4da2;
  &:hover {
    text-decoration: underline;
  }
`;

export { Section, Title, Table, THead, TBody, Row, Cell, Link };
