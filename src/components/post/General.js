import React from 'react';
import moment from 'moment';
import useStyles from './Style';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { TableContainer, Paper, Link, Typography } from '@material-ui/core';

const Links = ({ text, prefix }) => {
  const classes = useStyles();
  const links = (text && text.split(',')) || [];
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link}
            component={NavLink}
            to={`${prefix}/${link.trim().replace(/ /g, '-')}`}
            className={classes.link}
          >
            {link.trim()},
          </Link>
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
      <meta name="keywords" content={title + data.keywords} />
    </Helmet>
  );
};

const General = ({ data, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <SEO data={data} title={title} />
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>Form Type</TableCell>
              <TableCell>{data.form_type}</TableCell>
            </TableRow>
            {data.last_date && (
              <TableRow>
                <TableCell>Last Date</TableCell>
                <TableCell>
                  {moment(data.last_date).format('MMM DD, YYYY')}
                </TableCell>
              </TableRow>
            )}
            {data.total_vacancies && (
              <TableRow>
                <TableCell>Total Vacancies</TableCell>
                <TableCell>{data.total_vacancies}</TableCell>
              </TableRow>
            )}
            {data.location && (
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>
                  <Links text={data.location} prefix="/home/location" />
                </TableCell>
              </TableRow>
            )}
            {data.company && (
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>
                  <Links
                    text={data.company.replace(/\(.*\)/g, '')}
                    prefix="/home/company"
                  />
                  {data.company.replace(/^.*\(/g, ' (')}
                </TableCell>
              </TableRow>
            )}
            {data.qualification_required && (
              <TableRow>
                <TableCell>Qualification Required</TableCell>
                <TableCell>
                  <Links
                    text={data.qualification_required}
                    prefix="/home/qualification"
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default General;
