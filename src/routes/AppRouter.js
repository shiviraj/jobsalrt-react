import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Post from '../components/screen/Post';

const AppRouter = () => {
  return (
    <main>
      <Switch>
        <Route path="/post/:id" component={Post} />
      </Switch>
    </main>
  );
};

export default AppRouter;
