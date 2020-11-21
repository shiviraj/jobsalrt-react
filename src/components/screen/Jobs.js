import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import fetchApi from '../../api/fetchApi';
import LinkList from '../utils/LinkList';
import { Grid } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  pagination: {
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'center',
    '& button': { margin: theme.spacing(1) / 4 },
  },
}));

const AllJobs = (props) => {
  const classes = useStyles();
  const pathname = props.location.pathname.slice(1);
  const [path, , currentPageNo = 1] = pathname.split('/');
  const type = path.replace('-', '_').toUpperCase();

  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetchApi({ type, currentPageNo })
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [type, pathname]);

  useEffect(() => {
    fetchApi({ type: `${type}_PAGECOUNT` })
      .then((result) => setPageCount(result.count))
      .catch((e) => setPageCount(1));
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
      <div className={classes.pagination}>
        <Pagination
          count={pageCount}
          variant="outlined"
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              component={NavLink}
              to={`/${path}${item.page === 1 ? '' : `/page/${item.page}`}`}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
};

export default AllJobs;
