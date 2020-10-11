import React from 'react';
import { Section, Title, Row, Cell, Link } from './Style';

const ImportantDates = ({ data }) => {
  return (
    <Section>
      <Title>Important Links</Title>
      {Object.keys(data).map((key) => {
        return (
          <Row key={key}>
            <Cell style={{ textTransform: 'capitalize' }}>
              {key.replace(/_/g, ' ')}
            </Cell>
            <Cell>
              <Link href={data[key]} target="_blank">
                Click Here
              </Link>
            </Cell>
          </Row>
        );
      })}
    </Section>
  );
};

export default ImportantDates;
