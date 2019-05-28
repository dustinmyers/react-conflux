import React from 'react';
import { StateProvider } from '../../src';
import { testReducer } from './reducers';
import { testContext } from './contexts';

export const TestApp = ({ children }) => {
  return (
    <StateProvider reducer={testReducer} stateContext={testContext}>
      <div>{children}</div>
    </StateProvider>
  );
};
