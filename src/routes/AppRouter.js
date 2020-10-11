import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Post from '../components/screen/Post';
import AllJobs from '../components/screen/AllJobs';
import Home from '../components/screen/Home';
import Index from '../components/screen/Index';
import NotFound from '../components/includes/NotFound';

const AppRouter = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/home" component={Home} />
        <Route path="/all-jobs" component={AllJobs} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

export default AppRouter;
