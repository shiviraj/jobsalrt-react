import React from 'react';
import moment from 'moment';
import { Section, Title, Row, Cell } from './Style';

const ImportantDates = ({ data }) => {
  return (
    <Section>
      <Title>Important Dates</Title>
      {Object.keys(data).map((key) => {
        return (
          <Row key={key}>
            <Cell style={{ textTransform: 'capitalize' }}>
              {key.replace(/_/g, ' ')}
            </Cell>
            <Cell>
              {moment(data[key]).isValid()
                ? moment(data[key]).format('MMM DD, YYYY')
                : data[key]}
            </Cell>
          </Row>
        );
      })}
    </Section>
  );
};

export default ImportantDates;
