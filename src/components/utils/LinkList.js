import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, Paper, Typography, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Loader from '../includes/Loader';

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
    '&:hover': {
      background: theme.palette.grey['300'],
    },
  },
}));

const LinkList = ({ title, posts, isLoading }) => {
  const classes = useStyles();
  return (
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
                key={post._id}
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
  );
};

export default LinkList;
