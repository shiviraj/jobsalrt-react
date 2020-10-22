import React from 'react';
import { Section, Title, Table, TBody, Row, Cell } from './Style';

const Array = ({ data, title }) => {
  if (!data) return <></>;
  data = data[0] && data[0].body ? data[0].body : data;
  return (
    <Section>
      <Title>{title}</Title>
      <Table>
        <TBody>
          {data.map((item, index) => {
            return (
              <Row key={item + index}>
                <Cell>{item}</Cell>
              </Row>
            );
          })}
        </TBody>
      </Table>
    </Section>
  );
};

export default Array;
