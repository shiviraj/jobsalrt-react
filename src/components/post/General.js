import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { Section, Table, TBody, Title, Row, Cell } from './Style';

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

const SEO = ({ data, title }) => {
  const lastDate = moment(data.last_date).format('MMM DD, YYYY');
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="author" content="Shiviraj" />
      <meta
        name="description"
        content={`${title}, Last date for this post is ${lastDate}. Qualification for this post is ${
          data.qualification_required
        }. Location for this post is ${data.location}. Form mode is ${
          data.form_type
        }. Total vacancies for this post is ${data.total_vacancies || '....'}.`}
      />
      <meta name="keywords" content={data.keywords} />
    </Helmet>
  );
};

const General = ({ data, title }) => {
  return (
    <Section>
      <SEO data={data} title={title} />
      <Title>{title}</Title>
      <Table>
        <TBody>
          <Row>
            <Cell>Form Type</Cell>
            <Cell>{data.form_type}</Cell>
          </Row>
          <Row>
            <Cell>Last Date</Cell>
            <Cell>{moment(data.last_date).format('MMM DD, YYYY')}</Cell>
          </Row>
          {data.total_vacancies && (
            <Row>
              <Cell>Total Vacancies</Cell>
              <Cell>{data.total_vacancies}</Cell>
            </Row>
          )}
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
        </TBody>
      </Table>
    </Section>
  );
};

export default General;
