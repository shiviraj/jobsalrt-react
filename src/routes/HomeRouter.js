import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from '../components/home/Category';
import NotFound from '../components/includes/NotFound';

const HomeRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={Category} exact />
      {/* <Route path="/home/location" component={Location} />
      <Route path="/home/company" component={Company} />
      <Route path="/home/qualification" component={Qualification} />
      <Route path="/home/vacancy" component={Vacancy} /> */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default HomeRouter;
