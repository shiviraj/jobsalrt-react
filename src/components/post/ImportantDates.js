import React from 'react';
import moment from 'moment';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { TableContainer, Paper, Typography } from '@material-ui/core';
import useStyles from './Style';

const ImportantDates = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Typography variant="h6" className={classes.title}>
          Important Dates
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {Object.keys(data).map((key) => {
              return (
                <TableRow key={key}>
                  <TableCell style={{ textTransform: 'capitalize' }}>
                    {key.replace(/_/g, ' ')}
                  </TableCell>
                  <TableCell>
                    {moment(data[key]).isValid()
                      ? moment(data[key]).format('MMM DD, YYYY')
                      : data[key]}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ImportantDates;
