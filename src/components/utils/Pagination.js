import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'center',
    '& button': { margin: theme.spacing(1) / 4 },
  },
}));

const PaginationLayout = ({ pageCount = 1, path }) => {
  const classes = useStyles();

  return (
    <div className={classes.pagination}>
      <Pagination
        count={pageCount}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            component={NavLink}
            to={`${path}${item.page === 1 ? '' : `/page/${item.page}`}`}
            {...item}
          />
        )}
      />
    </div>
  );
};

export default PaginationLayout;
