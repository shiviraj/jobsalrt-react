import React from 'react';

import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { TableContainer, Paper, Typography, Link } from '@material-ui/core';
import useStyles from './Style';

const ImportantDates = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Typography className={classes.title} variant="h6">
          Important Links
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
                    <Link href={data[key]} target="_blank">
                      Click Here
                    </Link>
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
