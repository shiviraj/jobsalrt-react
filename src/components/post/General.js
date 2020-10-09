import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #0c4da2;
  &:last-child {
    border-bottom: 0;
  }
  &:nth-of-type(2n) {
    background-color: #eee;
  }
`;

const Cell = styled.div`
  width: 50%;
  border-right: 1px solid #0c4da2;
  padding: 4px 16px;
  &:last-child {
    border-right: 0;
  }
`;

const Table = ({ data }) => {
  return (
    <section>
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
    </section>
  );
};

export default Table;
