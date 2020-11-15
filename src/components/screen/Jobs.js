import React, { useState, useEffect } from 'react';
import fetchApi from '../../api/fetchApi';
import LinkList from '../utils/LinkList';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const AllJobs = (props) => {
  const classes = useStyles();
  const type = props.location.pathname.slice(1).replace('-', '_').toUpperCase();
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetchApi({ type })
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [type]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <LinkList
            posts={posts}
            title={type.replace('_', ' ')}
            isLoading={isLoading}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AllJobs;
