import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { useStateValue } from 'react-conflux';
import { globalContext } from '../../store/contexts';
import { HANDLE_CHANGE } from '../../store/reducers/globalReducer';

import confluxLogo from '../../static/conflux-logo-light.png';
import NavLink from './NavLink';

const Header = () => {
  const [state, dispatch] = useStateValue(globalContext);
  const { searchText } = state;
  const handleSearch = e => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  return (
    <header className="navbar__container">
      <div className="navbar__main">
        <h1 className="conflux-logo">
          <Link to="/">
            <img src={confluxLogo} alt="React-Conflux logo" />
          </Link>
        </h1>
        <nav className="navbar__links">
          <input
            className="search-bar"
            type="text"
            name="searchText"
            onChange={handleSearch}
            placeholder="Search"
            value={searchText}
          />
          {state.navLinks.map(link => {
            return (
              <NavLink key={link.id} text={link.text} route={link.route} />
            );
          })}
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  confluxLogo: PropTypes.string,
  searchText: PropTypes.string,
};

export default Header;
