import React from 'react';
import { StateProvider } from 'react-conflux';
import { Helmet } from 'react-helmet';
import { globalContext } from '../../store/contexts';
import { globalReducer } from '../../store/reducers/globalReducer';

import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Conflux - A state management library for React</title>
        {/* <link rel="canonical" href="PUT FINAL URL HERE" /> */}
      </Helmet>
      <StateProvider reducer={globalReducer} stateContext={globalContext}>
        <div className="container">
          <Header />
          {children}
        </div>
      </StateProvider>
    </>
  );
};

export default Layout;
