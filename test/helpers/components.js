import React from 'react';
import { StateProvider } from '../../src';
import { testReducer } from './reducers';
import { TestContext } from './contexts';

export const TestApp = ({ children }) => {
  return (
    <StateProvider reducer={testReducer} StateContext={TestContext}>
      <div>{children}</div>
    </StateProvider>
  );
};
