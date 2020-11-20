import React from 'react';

import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { TableContainer, Paper, Typography } from '@material-ui/core';
import useStyles from './Style';

const Array = ({ data, title }) => {
  const classes = useStyles();
  if (!data) return <></>;
  data = data[0] && data[0].body ? data[0].body : data;
  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {data.map((item, index) => {
              return (
                <TableRow key={item + index}>
                  <TableCell>{item}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Array;
