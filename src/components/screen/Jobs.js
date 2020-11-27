import React, { useState, useEffect } from 'react';
import fetchApi from '../../api/fetchApi';
import LinkList from '../utils/LinkList';
import { Grid } from '@material-ui/core';
import Pagination from '../utils/Pagination';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1) / 2,
    },
  },
}));

const AllJobs = (props) => {
  const classes = useStyles();
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  const pathname = props.location.pathname.slice(1);
  const [path, , currentPageNo = 1] = pathname.split('/');
  const type = path.replace('-', '_').toUpperCase();

  useEffect(() => {
    setIsLoading(true);
    fetchApi({ type, currentPageNo })
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [type, currentPageNo]);

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
      <Pagination pageCount={pageCount} path={`/${path}`} />
    </div>
  );
};

export default AllJobs;
