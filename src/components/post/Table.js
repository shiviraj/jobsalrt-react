import React from 'react';
import { Section, Title, Table, THead, TBody, Row, Cell } from './Style';

const TableHead = ({ data }) => {
  return (
    <THead>
      <Row>
        {data.map((item, index) => (
          <Cell key={item + index}>{item}</Cell>
        ))}
      </Row>
    </THead>
  );
};

const TableBody = ({ data }) => {
  return (
    <TBody>
      {data.map((row, rowNo) => {
        return (
          <Row key={row}>
            {row.map((item, itemNo) => {
              return <Cell key={`${item}_${rowNo}_${itemNo}`}>{item}</Cell>;
            })}
          </Row>
        );
      })}
    </TBody>
  );
};

const TableData = ({ data, title }) => {
  if (!data) return <></>;
  const { head, body } = data;
  return (
    <Section>
      <Title>{title}</Title>
      <Table>
        {head && <TableHead data={head} />}
        <TableBody data={body} />
      </Table>
    </Section>
  );
};

export default TableData;
