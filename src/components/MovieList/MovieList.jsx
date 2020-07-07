import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

import styles from '../../styles/Movies.module.css';

class MovieList extends Component {
  filtredMovies = array => {
    const values = new Set();

    const filtredMovies = array.filter(item => {
      const value = item['id'];
      if (!values.has(value)) {
        values.add(value);
        return true;
      }
      return false;
    });
    return filtredMovies;
  };

  render() {
    const { movies, routeProps } = this.props;

    return (
      <ul>
        {movies &&
          this.filtredMovies(movies).map(movie => (
            <li key={movie.id} className={styles.MovieListItem}>
              <Link
                className={styles.MovieListItemLink}
                to={{
                  pathname: `${routes.movies}/${movie.id}`,
                  state: {
                    from: routeProps.location,
                  },
                }}
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default MovieList;
