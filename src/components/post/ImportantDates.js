import React from 'react';
import moment from 'moment';
import { Section, Title, Row, Cell } from './Style';

const ImportantDates = (props) => {
  const { advt_no, ...data } = props.data;
  return (
    <Section>
      <Title>Important Dates</Title>
      <Row>
        <Cell>Advt No.</Cell>
        <Cell>{advt_no}</Cell>
      </Row>
      {Object.keys(data).map((key) => {
        return (
          <Row key={key}>
            <Cell style={{ textTransform: 'capitalize' }}>
              {key.replace(/_/g, ' ')}
            </Cell>
            <Cell>{moment(data[key]).format('MMM DD, YYYY')}</Cell>
          </Row>
        );
      })}
    </Section>
  );
};

export default ImportantDates;
