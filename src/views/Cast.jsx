import React, { Component } from 'react';
import Loader from '../components/Loader/Loader';

import apiService from '../services-api/apiService';
import styles from '../styles/Movies.module.css';

class Cast extends Component {
  state = {
    cast: [],
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
      .fetchMovieServiceDetailsCast(movieId)
      .then(({ cast }) => this.setState({ cast }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { cast, isLoading, error } = this.state;
    const { imageUrl, noImage } = apiService;

    return (
      <ul className={styles.CastList}>
        {isLoading && <Loader />}
        {error && <p>Что-то пошло не так: {error.message}</p>}
        {cast &&
          cast.map(({ cast_id, name, character, profile_path }) => (
            <li key={cast_id} className={styles.CastListItem}>
              <img
                src={profile_path ? `${imageUrl}${profile_path}` : noImage}
                alt={name}
                width="150"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    );
  }
}

export default Cast;
