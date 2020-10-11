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
      {data.map((row, rowNo) => {
        return (
          <Row key={row}>
            {row.map((item, itemNo) => {
              return <Cell key={`${item}_${rowNo}_${itemNo}`}>{item}</Cell>;
            })}
          </Row>
        );
      })}
    </>
  );
};

const Table = ({ data, title }) => {
  if (!data) return <></>;
  const { head, body } = data;
  return (
    <Section>
      <Title>{title}</Title>
      {head && <TableHead data={head} />}
      <TableBody data={body} />
    </Section>
  );
};

export default Table;
