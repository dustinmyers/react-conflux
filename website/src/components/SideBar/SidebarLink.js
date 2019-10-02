import React, { useState } from 'react';
import { Link } from 'gatsby';

import arrowUp from '../../images/arrow-up.svg';
import arrowDown from '../../images/arrow-down.svg';

const SidebarLink = ({ link }) => {
  const [open, setOpen] = useState(false);
  const openSection = e => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <li className="sidebar__link">
      <Link onClick={openSection} to={link.route}>
        <h2>{link.title}</h2>
        <img src={open ? arrowUp : arrowDown} alt="arrow" />
      </Link>
      <ol
        className={
          open ? 'sidebar__sub-links sub-links--open' : 'sidebar__sub-links'
        }
      >
        {link.sections.map(sectionLink => {
          return (
            <li className="sub-link">
              <Link onClick={openSection} to={link.route}>
                <p>{sectionLink.title}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </li>
  );
};

export default SidebarLink;
