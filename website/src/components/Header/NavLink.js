import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ text, route }) => {
  return (
    <Link className="link" to={route}>
      {text}
    </Link>
  );
};

export default NavLink;
