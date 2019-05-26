import React from 'react';
import TestRenderer from 'react-test-renderer';
import { useStateValue } from '../src';
import { TestApp } from './helpers/components';
import { TestContext, WrongContext } from './helpers/contexts';

describe('useStateValue()', () => {
  describe('tests that useStateValue() will destructure state and dispatch', () => {
    it('should mount successfully and destructure state and dispatch without crashing', () => {
      const ChildComponent = () => {
        const [{ text }, dispatch] = useStateValue(TestContext);
        return <p>{text}</p>;
      };

      const tree = TestRenderer.create(
        <TestApp>
          <ChildComponent />
        </TestApp>
      ).toJSON();

      expect(tree.children[0].children[0]).toBe('Testing');
    });
  });

  describe('tests that not passing context to useStateValue() throws an error', () => {
    beforeEach(() => {
      console.error = jest.fn();
    });

    it('should throw an error when no context is passed into it', () => {
      const ChildComponent = () => {
        const [{ text }] = useStateValue();
        return <p>{text}</p>;
      };

      expect(() => {
        return TestRenderer.create(
          <TestApp>
            <ChildComponent />
          </TestApp>
        );
      }).toThrow(
        'The StateContext object is undefined in your useStateValue hook. You probably forgot to pass the StateContext object into your useStateValue hook.'
      );
    });
  });

  describe('tests that primitive data types, arrays, and objects passed as argument throws an error', () => {
    beforeEach(() => {
      console.error = jest.fn();
    });

    const errorMessage =
      'Incorrect argument passed to the useStateValue hook. You probably passed a variable other than your context object into it.';

    it('should throw an error when an object literal is passed into it', () => {
      const ChildComponent = () => {
        const [{ text }, dispatch] = useStateValue({ text: 'Testing' });
        return <p>{text}</p>;
      };

      expect(() => {
        return TestRenderer.create(
          <TestApp>
            <ChildComponent />
          </TestApp>
        );
      }).toThrow(errorMessage);
    });

    it('should throw an error when an array literal is passed into it', () => {
      const ChildComponent = () => {
        const [{ text }, dispatch] = useStateValue(['Testing']);
        return <p>{text}</p>;
      };

      expect(() => {
        return TestRenderer.create(
          <TestApp>
            <ChildComponent />
          </TestApp>
        );
      }).toThrow(errorMessage);
    });

    it('should thrown an error when a string literal is passed into it', () => {
      const ChildComponent = () => {
        const [{ text }, dispatch] = useStateValue('Testing');
        return <p>{text}</p>;
      };

      expect(() => {
        return TestRenderer.create(
          <TestApp>
            <ChildComponent />
          </TestApp>
        );
      }).toThrow(errorMessage);
    });
  });

  describe('tests that the wrong context passed into useStateValue() throws an error', () => {
    beforeEach(() => {
      console.error = jest.fn();
    });

    it('should throw an error when the wrong context object is passed into it', () => {
      const ChildComponent = () => {
        const [{ text }, dispatch] = useStateValue(WrongContext);
        return <p>{text}</p>;
      };

      expect(() => {
        return TestRenderer.create(
          <TestApp>
            <ChildComponent />
          </TestApp>
        );
      }).toThrow(
        'The useStateValue hook must be used within the Provider of the Context object you have passed to it. Check to make sure you have passed in the correct context object and that the useStateValue hook is within a child of the correct Provider.'
      );
    });
  });
});
