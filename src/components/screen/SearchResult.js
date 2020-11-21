import React, { useContext, useState, useEffect } from 'react';
import SearchContext from '../../context/searchContext';
import fetchApi from '../../api/fetchApi';
import PostsList from '../home/utils/PostsList';
import Pagination from '../utils/Pagination';
import { Typography, TableContainer, Paper } from '@material-ui/core';
import useStyles from '../home/utils/Style';

const SearchResult = ({ location }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState(null);
  const { value } = useContext(SearchContext);
  const [pageCount, setPageCount] = useState(1);
  const [, , , currentPageNo = 1] = location.pathname.split('/');

  useEffect(() => {
    fetchApi({ type: 'SEARCH', payload: { value, currentPageNo } })
      .then((result) => setPosts(result))
      .catch((e) => {});
  }, [value, currentPageNo]);

  useEffect(() => {
    fetchApi({ type: 'SEARCH_PAGECOUNT', payload: { value } })
      .then((result) => setPageCount(result.count))
      .catch((e) => setPageCount(1));
  }, [value]);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Typography variant="h6" className={classes.title}>
          Search: {value}
        </Typography>
        {posts && <PostsList posts={posts} />}
      </TableContainer>
      <Pagination pageCount={pageCount} path="/search" />
    </div>
  );
};

export default SearchResult;
