import React, { useState, useEffect } from 'react';
import Links from './utils/Links';
import Loader from '../includes/Loader';
import fetchApi from '../../api/fetchApi';
import PostsList from './utils/PostsList';
import { Typography, Paper, TableContainer } from '@material-ui/core';
import useStyles from './utils/Style';
import Pagination from '../utils/Pagination';

const JobsBy = ({ location }) => {
  const classes = useStyles();
  const [, jobsBy, key, value, , currentPageNo = 1] = location.pathname.split(
    '/'
  );

  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    fetchApi({ type: 'GET_LIST', payload: { key } })
      .then((result) => setList(result))
      .catch(() => {});
  }, [key]);

  useEffect(() => {
    fetchApi({ type: 'FETCH_POSTS_BY_PAGECOUNT', payload: { key, value } })
      .then((result) => setPageCount(result.count))
      .catch(() => setPageCount(1));
  }, [key, value]);

  useEffect(() => {
    setIsLoading(true);
    fetchApi({
      type: 'FETCH_POSTS_BY',
      payload: { key, value, currentPageNo },
    })
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [key, value, currentPageNo]);

  const createLink = (item) => {
    return `/home/${key}/${item.trim().replace(/ /g, '-')}`;
  };

  return (
    <div className={classes.root}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Typography variant="h6" className={classes.title}>
          {key} Wise Posts
        </Typography>
        {list ? <Links list={list} getLink={createLink} /> : <Loader />}
        <Typography variant="h6" className={classes.title}>
          {value ? value.replace(/-/g, ' ') : 'All'}
        </Typography>
        {isLoading ? <Loader /> : <PostsList posts={posts} />}
      </TableContainer>
      <Pagination pageCount={pageCount} path={`/${jobsBy}/${key}/${value}`} />
    </div>
  );
};

export default JobsBy;
