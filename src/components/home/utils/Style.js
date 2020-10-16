import styled from 'styled-components';

const Section = styled.section`
  border: 1px solid #0c4da2;
  margin: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 420px) {
    & {
      margin: 2px;
    }
  }
`;

const Layout = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  background: #0c4da2;
  color: #fff;
  padding: 4px 16px;
  width: 100%;
  font-weight: 500;
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
`;

const Row = styled.tr``;
const Cell = styled.td`
  padding: 8px;
  border: 1px solid #0c4da2;
  @media only screen and (max-width: 420px) {
    & {
      padding: 2px;
    }
  }
`;

const InnerTable = styled.table`
  border-collapse: collapse;
  height: 100%;
  @media only screen and (max-width: 420px) {
    & {
      display: none;
    }
  }
`;

export { Section, Layout, Title, Link, Row, Cell, Table, InnerTable };
