import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import fetchApi from '../../../api/fetchApi';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper } from '@material-ui/core';
import LinkList from '../../utils/LinkList';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid #0c4da2',
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)',
    color: theme.palette.text.secondary,
    height: '100%',
    '& > div': {
      border: 'none',
      boxShadow: 'none',
    },
  },

  viewMore: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
}));

const Jobs = ({ title }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState(null);
  const type = title.replace(' ', '_').toUpperCase();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApi({ type })
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [type]);

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Paper className={classes.paper}>
        <LinkList title={title} posts={posts} isLoading={isLoading} />
        <div className={classes.viewMore}>
          <Button
            variant="contained"
            color="primary"
            component={NavLink}
            to={`/${title.replace(' ', '-').toLowerCase()}`}
          >
            View More
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default Jobs;
