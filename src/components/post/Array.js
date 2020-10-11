import React from 'react';
import { Section, Title, Row, Cell } from './Style';

const Array = ({ data, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {data.map((item, index) => {
        return (
          <Row key={item + index}>
            <Cell>{item}</Cell>
          </Row>
        );
      })}
    </Section>
  );
};

export default Array;
