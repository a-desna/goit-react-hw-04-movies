import React, { Component, Fragment } from 'react';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Loader from '../components/Loader/Loader';

import apiService from '../services-api/apiService';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.setState({ isLoading: true });
    apiService
      .fetchMovieServiceDetails(movieId)
      .then(res => this.setState({ movie: res }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { movie, isLoading, error } = this.state;

    return (
      <Fragment>
        {isLoading && <Loader />}
        {error && <p>Что-то пошло не так: {error.message}</p>}
        <MovieDetails movie={movie} routeProps={this.props} />
      </Fragment>
    );
  }
}

export default MovieDetailsPage;
