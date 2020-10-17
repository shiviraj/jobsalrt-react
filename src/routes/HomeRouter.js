import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from '../components/home/Category';
import Vacancy from '../components/home/Vacancy';
import JobsBy from '../components/home/JobsBy';

const HomeRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={Category} exact />
      <Route
        path={['/home/location', '/home/company', '/home/qualification']}
        component={JobsBy}
      />
      <Route path="/home/vacancy" component={Vacancy} />
    </Switch>
  );
};

export default HomeRouter;
