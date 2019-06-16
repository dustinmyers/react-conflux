import React from 'react';
import '../../styles/index.scss';
import { StateProvider } from 'react-conflux';
import { globalContext } from '../../store/contexts';
import { globalReducer } from '../../store/reducers/globalReducer';

import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <StateProvider reducer={globalReducer} stateContext={globalContext}>
      <div className="container">
        <Header />
        <div>{children}</div>
      </div>
    </StateProvider>
  );
};

export default Layout;
