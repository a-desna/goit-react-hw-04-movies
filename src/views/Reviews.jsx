import React, { Component, Fragment } from 'react';
import Loader from '../components/Loader/Loader';

import apiService from '../services-api/apiService';

class Reviews extends Component {
  state = {
    results: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.fetchMoviesCast(movieId);
  }

  fetchMoviesCast = movieId => {
    this.setState({ isLoading: true });
    apiService
      .fetchMovieServiceReviews(movieId)
      .then(({ results }) => this.setState({ results }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { results, isLoading, error } = this.state;

    return (
      <Fragment>
        {isLoading && <Loader />}
        {error && <p>Что-то пошло не так: {error.message}</p>}
        {results.length > 0 ? (
          <ul>
            {results.map(({ id, author, content, url }) => (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
                <a href={url} target="_blanc">
                  {author}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>We do not have any reviews for this movies</p>
        )}
      </Fragment>
    );
  }
}

export default Reviews;
