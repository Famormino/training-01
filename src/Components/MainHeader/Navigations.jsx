import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.loggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.loggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.loggedIn && (
          <li>
            <button onClick={props.loggedOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
