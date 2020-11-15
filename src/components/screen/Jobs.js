import React, { useState, useEffect } from 'react';
import Loader from '../includes/Loader';
import { NavLink } from 'react-router-dom';
import fetchApi from '../../api/fetchApi';

import { Typography, Grid, Paper, ListItem } from '@material-ui/core';
import { List, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  paper: {
    border: '1px solid #0c4da2',
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)',
    color: theme.palette.text.secondary,
  },
  heading: {
    color: '#fff',
    background: theme.palette.primary.main,
    padding: ' 4px',
    fontSize: ' 20px',
    fontWeight: ' 500',
    border: `1px solid ${theme.palette.primary.main}`,
  },
  list: {
    padding: theme.spacing(1) / 10,
  },
  listItem: {
    padding: theme.spacing(1) / 2.5,
    fontWeight: '200',
    '&:hover': {
      background: theme.palette.grey['300'],
    },
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
      <Grid item sm={12}>
        <Paper className={classes.paper}>
          <Typography variant="h3" className={classes.heading}>
            {type.replace('_', ' ')}
          </Typography>
          <List component="ul" aria-label="posts" className={classes.list}>
            {isLoading || !posts ? (
              <Loader />
            ) : (
              posts.map((post) => {
                return (
                  <Link
                    component={NavLink}
                    to={`/post/${post.url}`}
                    color="primary"
                  >
                    <ListItem
                      key={post._id}
                      className={classes.listItem}
                      component="li"
                    >
                      ⁕ {post.title}
                    </ListItem>
                  </Link>
                );
              })
            )}
          </List>
        </Paper>
      </Grid>
    </div>
  );
};

export default AllJobs;
