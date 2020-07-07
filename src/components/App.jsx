import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../views/HomePage';
import Movies from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import routes from '../routes';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.movies} exact component={Movies} />
        <Route path={routes.moviesDetailsPage} component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
