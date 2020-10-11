import React from 'react';
import moment from 'moment';
import { Section, Title, Row, Cell } from './Style';

const Table = ({ data, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Row>
        <Cell>Form Type</Cell>
        <Cell>{data.form_type}</Cell>
      </Row>
      <Row>
        <Cell>Last Date</Cell>
        <Cell>{moment(data.last_date).format('MMM DD, YYYY')}</Cell>
      </Row>
      <Row>
        <Cell>Total Vacancies</Cell>
        <Cell>{data.total_vacancies}</Cell>
      </Row>
      <Row>
        <Cell>Location</Cell>
        <Cell>{data.location}</Cell>
      </Row>
      <Row>
        <Cell>Company</Cell>
        <Cell>{data.company}</Cell>
      </Row>
      <Row>
        <Cell>Qualification Required</Cell>
        <Cell>{data.qualification_required}</Cell>
      </Row>
    </Section>
  );
};

export default Table;
