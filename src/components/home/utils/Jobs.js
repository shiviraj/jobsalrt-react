import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../includes/Loader';
import fetchApi from '../../../api/fetchApi';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link, Grid, Paper, Typography, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
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
    textAlign: ' center',
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
        <Typography variant="h3" className={classes.heading}>
          {title}
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
