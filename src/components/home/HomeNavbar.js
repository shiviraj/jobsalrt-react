import React from 'react';
import { NavLink } from 'react-router-dom';
import category from '../../media/icons/category.png';
import location from '../../media/icons/location.png';
import company from '../../media/icons/company.png';
import qualification from '../../media/icons/qualification.png';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Paper, Tab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px',
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      height: '0px',
    },
  },
  smallView: {
    display: 'none',

    '& img': {
      height: '32px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

const HomeNavbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper square className={classes.smallView}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab
            component={NavLink}
            to="/home"
            icon={<img src={category} alt="category" />}
          />
          <Tab
            component={NavLink}
            to="/home/location"
            icon={<img src={location} alt="location" />}
          />
          <Tab
            component={NavLink}
            to="/home/company"
            icon={<img src={company} alt="company" />}
          />
          <Tab
            component={NavLink}
            to="/home/qualification"
            icon={<img src={qualification} alt="qualification" />}
          />
        </Tabs>
      </Paper>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab component={NavLink} to="/home" label="Category" />
          <Tab component={NavLink} to="/home/location" label="Location" />
          <Tab component={NavLink} to="/home/company" label="Company" />
          <Tab
            component={NavLink}
            to="/home/qualification"
            label="Qualifications"
          />
        </Tabs>
      </Paper>
    </>
  );
};

export default HomeNavbar;
