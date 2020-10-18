import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { Section, Title, Row, Cell } from './Style';

const Links = ({ text, prefix }) => {
  const links = (text && text.split(',')) || [];
  return (
    <>
      {links.map((link) => {
        return (
          <NavLink
            key={link}
            to={`${prefix}/${link.trim().replace(/ /g, '-')}`}
          >
            {link.trim()}
          </NavLink>
        );
      })}
    </>
  );
};

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
        <Cell>
          <Links text={data.location} prefix="/home/location" />
        </Cell>
      </Row>
      <Row>
        <Cell>Company</Cell>
        <Cell>
          <Links
            text={data.company.replace(/\(.*\)/g, '')}
            prefix="/home/company"
          />
          {data.company.replace(/^.*\(/g, ' (')}
        </Cell>
      </Row>
      <Row>
        <Cell>Qualification Required</Cell>
        <Cell>
          <Links
            text={data.qualification_required}
            prefix="/home/qualification"
          />
        </Cell>
      </Row>
    </Section>
  );
};

export default Table;
