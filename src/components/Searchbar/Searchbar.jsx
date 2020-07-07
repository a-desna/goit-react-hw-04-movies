import React, { Component } from 'react';
import styles from '../../styles/Movies.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.value);
    this.setState({
      value: '',
    });
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <input
          className={styles.SearchFormInput}
          type="text"
          value={value}
          onChange={this.handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    );
  }
}

export default Searchbar;
