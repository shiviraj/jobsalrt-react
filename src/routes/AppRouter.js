import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Post from '../components/screen/Post';
import AllJobs from '../components/screen/AllJobs';
import Home from '../components/screen/Home';
import Index from '../components/screen/Index';

const AppRouter = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/home" component={Home} />
        <Route path="/all-jobs" component={AllJobs} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </main>
  );
};

export default AppRouter;
