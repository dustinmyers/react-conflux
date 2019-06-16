import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import confluxLogo from '../../images/conflux-logo-light.png';

const Header = () => {
  return (
    <header className="navbar__container">
      <div className="navbar__main">
        <h1 className="conflux-logo">
          <Link to="/">
            <img src={confluxLogo} alt="React-Conflux logo" />
          </Link>
        </h1>
        <nav className="navbar__links">
          <div />
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  confluxLogo: PropTypes.string,
};

export default Header;
