import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Post from '../components/screen/Post';
import AllJobs from '../components/screen/AllJobs';

const AppRouter = () => {
  return (
    <main>
      <Switch>
        <Route path="/all-jobs" component={AllJobs} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </main>
  );
};

export default AppRouter;
