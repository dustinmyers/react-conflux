import React, { useContext } from 'react';
import TestRenderer from 'react-test-renderer';
import { StateProvider } from '../src/store';
import { TestContext } from './helpers/contexts';
import { testReducer } from './helpers/reducers';

describe('<StateProvider />', () => {
  it('should mount successfully without crashing when wrapped around a component', () => {
    const helpers = TestRenderer.create(
      <StateProvider
        initialState={{}}
        reducer={testReducer}
        StateContext={TestContext}
      >
        <p>Testing</p>
      </StateProvider>
    );
  });
});
