import React from 'react';
import Jobs from './utils/Jobs';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      overflow: 'hidden',
      padding: theme.spacing(1) / 2,
      marginTop: theme.spacing(1) / 2,
    },
  },
}));

const Category = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Jobs title="Latest Jobs" />
        <Jobs title="Admit Card" />
        <Jobs title="Results" />
        <Jobs title="Answer Key" />
        <Jobs title="Syllabus" />
        <Jobs title="Admission" />
        <Jobs title="Others" />
        <Jobs title="Upcoming" />
        <Jobs title="Expiring Soon" />
      </Grid>
    </div>
  );
};

export default Category;
