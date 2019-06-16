import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useStateValue } from 'react-conflux';
import { globalContext } from '../../store/contexts';

import confluxLogo from '../../images/conflux-logo-light.png';
import NavLink from './NavLink';

const Header = () => {
  const [state] = useStateValue(globalContext);
  console.log(state);
  return (
    <header className="navbar__container">
      <div className="navbar__main">
        <h1 className="conflux-logo">
          <Link to="/">
            <img src={confluxLogo} alt="React-Conflux logo" />
          </Link>
        </h1>
        <nav className="navbar__links">
          {state.navLinks.map(link => {
            return <NavLink text={link.text} route={link.route} />;
          })}
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  confluxLogo: PropTypes.string,
};

export default Header;
