import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loader from '../components/Loader/Loader';
import routes from '../routes';

const Home = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "HomePage" */),
);
const Movies = lazy(() =>
  import('../views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

function App() {
  return (
    <Layout>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.movies} exact component={Movies} />
          <Route path={routes.moviesDetailsPage} component={MovieDetailsPage} />
          {/* <Redirect to="/" /> */}
        </Suspense>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
