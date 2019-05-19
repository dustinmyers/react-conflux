import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { StateProvider } from '../src';
import { TestContext } from './helpers/contexts';
import { testReducer } from './helpers/reducers';

describe('<StateProvider />', () => {
  describe('tests that the component will mount successfully with all arguments', () => {
    it('should mount successfully without crashing when wrapped around a child component', () => {
      const helpers = TestRenderer.create(
        <StateProvider reducer={testReducer} StateContext={TestContext}>
          <p>Testing</p>
        </StateProvider>,
      );
      expect(helpers).toBeTruthy();
    });
  });

  describe('tests the reducer argument passed into the <StateProvider /> component', () => {
    const errorMessage =
      'The reducer must be a function. You might have forgotten to pass your reducer into your StateProvider.';

    it('should throw an error when no reducer is passed into it', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider StateContext={TestContext}>
            <p>Testing</p>
          </StateProvider>,
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when an object is passed in as a reducer', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer={{}} StateContext={TestContext}>
            <p>Testing</p>
          </StateProvider>,
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when an array is passed in as a reducer', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer={'Dude'} StateContext={TestContext}>
            <p>Testing</p>
          </StateProvider>,
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when a string is passed in as a reducer', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer={'Dude'} StateContext={TestContext}>
            <p>Testing</p>
          </StateProvider>,
        );
      }).toThrow(errorMessage);
    });
  });

  describe('tests the children argument passed into the <StateProvider /> component', () => {
    const errorMessage =
      'StateProvider must contain children components. You probably forgot to wrap it around your components in your JSX.';

    it('should throw an error when no children are passed into it', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(<StateProvider reducer={testReducer} StateContext={TestContext} />);
      }).toThrow(errorMessage);
    });

    it('should throw an error when children are not of type "object"', () => {
      const renderer = new ShallowRenderer();
      const string = 'Marty, we have to go back!';
      expect(() => {
        return renderer.render(
          <StateProvider reducer={testReducer} StateContext={TestContext}>
            {string}
          </StateProvider>,
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when children are an empty object', () => {
      const renderer = new ShallowRenderer();
      expect(() => {
        return renderer.render(
          <StateProvider reducer={testReducer} StateContext={TestContext}>
            {}
          </StateProvider>,
        );
      }).toThrow(errorMessage);
    });
  });
});
