import React from 'react';
import '../../styles/index.scss';
import layoutStyles from './_layout.module.scss';

import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
