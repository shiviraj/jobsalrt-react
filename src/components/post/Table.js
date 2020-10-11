import React from 'react';
import { Section, Title, THead, Row, Cell } from './Style';

const TableHead = ({ data }) => {
  return (
    <THead>
      {data.map((item) => (
        <Cell key={item}>{item}</Cell>
      ))}
    </THead>
  );
};

const TableBody = ({ data }) => {
  return (
    <>
      {data.map((row) => {
        return (
          <Row key={row}>
            {row.map((item) => {
              return <Cell key={item}>{item}</Cell>;
            })}
          </Row>
        );
      })}
    </>
  );
};

const Table = ({ data, title }) => {
  const { head, body } = data;
  return (
    <Section>
      <Title>{title}</Title>
      <TableHead data={head} />
      <TableBody data={body} />
    </Section>
  );
};

export default Table;
