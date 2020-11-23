import React from 'react';
import Jobs from './utils/Jobs';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
}));

const Category = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Jobs title="Latest Jobs" />
        <Jobs title="Admit Card" />
        <Jobs title="Results" />
        <Jobs title="Answer Key" />
        <Jobs title="Syllabus" />
        <Jobs title="Admission" />
      </Grid>
    </div>
  );
};

export default Category;
