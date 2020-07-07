import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from '../../styles/Movies.module.css';

class Navigation extends Component {
  render() {
    return (
      <ul className={styles.NavList}>
        <li>
          <NavLink
            exact
            to={routes.home}
            className={styles.Link}
            activeClassName={styles.ActiveLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className={styles.Link}
            activeClassName={styles.ActiveLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
