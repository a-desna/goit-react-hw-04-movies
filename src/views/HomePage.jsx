import React, { Component } from 'react';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';

import apiService from '../services-api/apiService';
import styles from '../styles/Movies.module.css';

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    apiService
      .fetchMovieServiceTrending()
      .then(resusts => this.setState({ movies: resusts }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <div>
        <h2 className={styles.TitleHomePage}>Trending today</h2>
        {isLoading && <Loader />}
        {error && <p>Что-то пошло не так: {error.message}</p>}
        <MovieList movies={movies} routeProps={this.props} />
      </div>
    );
  }
}

export default HomePage;
