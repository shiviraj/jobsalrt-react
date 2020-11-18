import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    '& a:hover': {
      background: theme.palette.grey['400'],
    },
    '& .active, & .active:hover': {
      background: theme.palette.primary.light,
      color: '#fff',
    },
  },
  fullList: {
    width: 'auto',
  },
  menubar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '& nav': {
      display: 'flex',
      background: theme.palette.secondary.light,
      padding: '0',
    },
    '& a': { width: 'auto' },
    '& a:hover': {
      background: theme.palette.grey['300'],
    },
    '& .active, & .active:hover': {
      background: theme.palette.primary.light,
      color: '#fff',
    },
  },
}));

const pages = [
  'home',
  'all-jobs',
  'latest-jobs',
  'admit-card',
  'results',
  'answer-key',
  'syllabus',
  'admission',
];

const NavList = ({ page }) => {
  return (
    <List component="nav">
      {pages.map((pageName, index) => {
        return (
          <ListItem
            button
            component={NavLink}
            to={`/${pageName}`}
            key={pageName + index}
            selected={page === pageName}
            role="presentation"
          >
            <ListItemText primary={pageName.replace('-', ' ').toUpperCase()} />
          </ListItem>
        );
      })}
    </List>
  );
};

const MenuBar = ({ isOpen, toggleDrawer }) => {
  const classes = useStyles();
  const history = useHistory();
  const [page] = React.useState(history.location.pathname);

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(false)}
      >
        <div
          className={classes.list}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(true)}
        >
          <NavList page={page} />
        </div>
      </SwipeableDrawer>
      <div className={classes.menubar}>
        <NavList page={page} />
      </div>
    </div>
  );
};

export default MenuBar;
