import React from 'react';
import { Section, Title, Row, Cell } from './Style';

const Array = ({ data, title }) => {
  if (!data) return <></>;
  data = data[0] && data[0].body ? data[0].body : data;
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
