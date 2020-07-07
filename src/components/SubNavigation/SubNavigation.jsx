import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../styles/Movies.module.css';

class SubNavigation extends Component {
  render() {
    const { routeProps } = this.props;

    return (
      <ul className={styles.SubNavList}>
        <li>
          <NavLink
            exact
            to={
              routeProps.location.state
                ? {
                    pathname: `${routeProps.match.url}/cast`,
                    state: {
                      from: routeProps.location.state.from,
                    },
                  }
                : `${routeProps.match.url}/cast`
            }
            className={styles.SubNavLink}
            activeClassName={styles.SubNavActiveLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={
              routeProps.location.state
                ? {
                    pathname: `${routeProps.match.url}/reviews`,
                    state: {
                      from: routeProps.location.state.from,
                    },
                  }
                : `${routeProps.match.url}/reviews`
            }
            className={styles.SubNavLink}
            activeClassName={styles.SubNavActiveLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SubNavigation;
