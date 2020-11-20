import React, { useState, useEffect } from 'react';
import Links from './utils/Links';
import Loader from '../includes/Loader';
import fetchApi from '../../api/fetchApi';
import PostsList from './utils/PostsList';
import { Typography, Paper, TableContainer } from '@material-ui/core';
import useStyles from './utils/Style';

const JobsBy = (props) => {
  const classes = useStyles();
  const [, , name, jobsBy] = props.location.pathname.split('/');

  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchApi({ type: 'GET_LIST', payload: { name } })
      .then((result) => setList(result))
      .catch(() => {});
  }, [name]);

  useEffect(() => {
    setIsLoading(true);
    fetchApi({ type: 'FETCH_POSTS_BY', payload: { name, jobsBy } })
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [name, jobsBy]);

  const createLink = (item) => {
    return `/home/${name}/${item.trim().replace(/ /g, '-')}`;
  };

  return (
    <div className={classes.root}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Typography variant="h6" className={classes.title}>
          {name} Wise Posts
        </Typography>
        {list ? <Links list={list} getLink={createLink} /> : <Loader />}
        <Typography variant="h6" className={classes.title}>
          {jobsBy ? jobsBy.replace(/-/g, ' ') : 'All'}
        </Typography>
        {isLoading ? <Loader /> : <PostsList posts={posts} />}
      </TableContainer>
    </div>
  );
};

export default JobsBy;
