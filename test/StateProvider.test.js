import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { StateProvider } from '../src';
import { testContext } from './helpers/contexts';
import { testReducer } from './helpers/reducers';

describe('<StateProvider />', () => {
  describe('tests that the component will mount successfully with all arguments', () => {
    it('should mount successfully without crashing', () => {
      const tree = TestRenderer.create(
        <StateProvider reducer={testReducer} stateContext={testContext}>
          <p>Testing</p>
        </StateProvider>
      );
      expect(tree).toBeTruthy();
    });
  });

  describe('tests the reducer argument passed into the <StateProvider /> component', () => {
    /**
     * Rids console.error in tests from PropTypes where we're specficially trying to test if
     * custom error messages occur when not passing specific props.
     *  */

    beforeEach(() => {
      console.error = jest.fn();
    });

    const errorMessage =
      'The reducer must be a function. You might have forgotten to pass your reducer into your StateProvider.';

    it('should throw an error when no reducer is passed into it', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider stateContext={testContext}>
            <p>Testing</p>
          </StateProvider>
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when an object is passed in as a reducer', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer={{}} stateContext={testContext}>
            <p>Testing</p>
          </StateProvider>
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when an array is passed in as a reducer', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer={[]} stateContext={testContext}>
            <p>Testing</p>
          </StateProvider>
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when a string is passed in as a reducer', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer="Dude" stateContext={testContext}>
            <p>Testing</p>
          </StateProvider>
        );
      }).toThrow(errorMessage);
    });
  });

  describe('tests the children argument passed into the <StateProvider /> component', () => {
    beforeEach(() => {
      console.error = jest.fn();
    });

    const errorMessage =
      'StateProvider must contain children components. You probably forgot to wrap it around your components in your JSX.';

    it('should throw an error when no children are passed into it', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer={testReducer} stateContext={testContext} />
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when children are not of type "object"', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer={testReducer} stateContext={testContext}>
            {'Marty, we have to go back!'}
          </StateProvider>
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when children are an empty object', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer={testReducer} stateContext={testContext}>
            {}
          </StateProvider>
        );
      }).toThrow(errorMessage);
    });
  });
});
