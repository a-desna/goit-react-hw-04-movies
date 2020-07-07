import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import SubNavigation from '../SubNavigation/SubNavigation';
import Cast from '../../views/Cast';
import Reviews from '../../views/Reviews';
import routes from '../../routes';
import apiService from '../../services-api/apiService';
import styles from '../../styles/Movies.module.css';

class MovieDetails extends Component {
  handleGoBack = () => {
    const { routeProps } = this.props;
    const { state } = routeProps.location;
    if (state && state.from) {
      return routeProps.history.push(state.from);
    }
    routeProps.history.push(routes.movies);
  };

  render() {
    const { movie, routeProps } = this.props;
    const { imageUrl, noImage } = apiService;

    return (
      <Fragment>
        {movie && (
          <div>
            <button
              type="button"
              className={styles.ButtonGoBack}
              onClick={this.handleGoBack}
            >
              Go back
            </button>
            <div className={styles.MovieDetailsWrapper}>
              <div className={styles.MovieDetails}>
                <img
                  className={styles.MovieDetailsImg}
                  src={
                    movie.poster_path
                      ? `${imageUrl}${movie.poster_path}`
                      : noImage
                  }
                  alt={movie.original_title}
                  width="400"
                />
              </div>
              <div className={styles.MovieDetails}>
                <h2>{movie.original_title}</h2>
                <p>User Score {movie.vote_average}</p>
                <h3>Owerview</h3>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                <p>
                  {movie.genres.map(e => (
                    <span key={e.id}>{e.name} </span>
                  ))}
                </p>
              </div>
            </div>
            <hr />
            <div>
              <h3>Additional information</h3>
              <SubNavigation routeProps={routeProps} />
              <hr />
              <Switch>
                <Route path={routes.cast} component={Cast} />
                <Route path={routes.reviews} component={Reviews} />
              </Switch>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default MovieDetails;
