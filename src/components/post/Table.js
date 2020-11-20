import React from 'react';

import { TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Table, Paper, TableContainer, Typography } from '@material-ui/core';
import useStyles from './Style';

const THead = ({ data }) => {
  return (
    <TableHead>
      <TableRow>
        {data.map((item, index) => (
          <TableCell key={item + index}>{item}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const TBody = ({ data }) => {
  return (
    <TableBody>
      {data.map((row, rowNo) => {
        return (
          <TableRow key={row}>
            {row.map((item, itemNo) => {
              return (
                <TableCell key={`${item}_${rowNo}_${itemNo}`}>{item}</TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

const TableData = ({ data, title }) => {
  const classes = useStyles();
  if (!data) return <></>;
  const { head, body } = data;
  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          {head && <THead data={head} />}
          <TBody data={body} />
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
