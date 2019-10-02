import React from 'react';
import { sidebarLinks } from '../../store/constants';

import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <aside className="sidebar__container">
      <ul className="sidebar__content">
        {sidebarLinks.map(link => {
          return <SidebarLink link={link} />;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
