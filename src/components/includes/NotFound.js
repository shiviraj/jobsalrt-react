import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: `display: flex;
flex-direction: column;
flex: 1;
height: 60vh;
justify-content: center;
text-align: center;
font-size: 60px;
opacity: 0.7;
color: #f00;
@media only screen and (max-width: 420px) {
  & {
    font-size: 32px;
    height: 32vh;
  }
}`,
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Site is under development, we will implement this feature soon!
    </div>
  );
};

export default NotFound;
