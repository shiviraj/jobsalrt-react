import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageRouter from './PageRouter';
import Post from '../components/screen/Post';
import Jobs from '../components/screen/Jobs';
import Home from '../components/screen/Home';
import Index from '../components/screen/Index';
import SearchResult from '../components/screen/SearchResult';
import NotFound from '../components/includes/NotFound';

const AppRouter = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/home" component={Home} />

        <Route
          path={[
            '/all-jobs',
            '/latest-jobs',
            '/admit-card',
            '/results',
            '/answer-key',
            '/syllabus',
            '/admission',
          ]}
          component={Jobs}
        />
        <Route path="/post/:url" component={Post} />
        <Route path="/page" component={PageRouter} />
        <Route path="/search" component={SearchResult} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
};

export default AppRouter;
