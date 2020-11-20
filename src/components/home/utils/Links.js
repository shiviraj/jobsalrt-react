import { NavLink } from 'react-router-dom';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './Style';

const Links = ({ list, getLink }) => {
  const classes = useStyles();
  const history = useHistory();
  const url = history.location.pathname;

  return (
    <List className={classes.links} component="nav">
      <ListItem
        button
        component={NavLink}
        to={getLink('')}
        selected={url === getLink('')}
        role="presentation"
        exact
      >
        <ListItemText primary="All" />
      </ListItem>
      {list.map((item) => {
        const link = getLink(item);
        return (
          <ListItem
            button
            key={item}
            component={NavLink}
            to={link}
            variant={url === link}
            role="presentation"
          >
            <ListItemText primary={item} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Links;
