import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import MovieList from '../components/MovieList/MovieList';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';

import apiService from '../services-api/apiService';
import queryString from '../utils/getQueryString';
import { error } from '../utils/pnotify';
// notice, success,

class MoviesPage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPage: null,
    query: '',
  };

  componentDidMount() {
    const { query } = queryString(this.props.location.search);
    this.setState({ query });
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevParams } = queryString(prevProps.location.search);
    const { query: nextParams } = queryString(this.props.location.search);
    if (prevParams !== nextParams) {
      if (nextParams === undefined) {
        this.setState({ movies: [] });
        return;
      }
      this.fetchMovies(nextParams);
    }
  }

  fetchMovies = query => {
    this.setState({ isLoading: true });
    apiService
      .fetchMovieServiceWithQuery(query)
      .then(res => {
        if (res.results.length === 0) {
          error({
            text: 'Please enter a more specific query!',
          });
        }
        this.setState({
          movies: res.results,
          totalPage: res.total_pages,
          page: this.state.page + 1,
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  fetchMoviesLoadMore = () => {
    this.setState({ isLoading: true });
    apiService
      .fetchMovieServiceWithQuery(this.state.query, this.state.page)
      .then(res =>
        this.setState(prevState => ({
          movies: [...prevState.movies, ...res.results],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        this.scroll();
      });
  };

  handleSearch = query => {
    if (!query || query === this.state.query) {
      return;
    }
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
    this.setState({ query, movies: [], page: 1 });
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { movies, isLoading, error, totalPage, page } = this.state;

    return (
      <div>
        <Searchbar onSearch={this.handleSearch} />
        {error && <p>Что-то пошло не так: {error.message}</p>}
        {movies.length > 0 && (
          <MovieList movies={movies} routeProps={this.props} />
        )}
        {isLoading && <Loader />}
        {movies.length > 0 && page <= totalPage && !isLoading && (
          <Button onLoadMore={this.fetchMoviesLoadMore} />
        )}
      </div>
    );
  }
}

export default MoviesPage;
