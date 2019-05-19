import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { StateProvider } from '../src';
import { useStateValue } from '../src';
import { TestContext } from './helpers/contexts';
import { testReducer } from './helpers/reducers';

describe('.useStateValue() hook', () => {
  describe('provides state and dispatch inside a component successfully without crashing', () => {
    it('should render text in the child component successfully', () => {
      // const TestComponent = () => {
      //   const [testState] = useStateValue(TestContext);
      //   return <p>{testState.text}</p>;
      // };
      // const App = () => {
      //   return (
      //     <StateProvider reducer={testReducer} StateContext={TestContext}>
      //       <TestComponent />
      //     </StateProvider>
      //   );
      // };
    });
  });
});
