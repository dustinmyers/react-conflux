import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { useStateValue } from '../src';
import { TestApp } from './helpers/components';
import { TestContext } from './helpers/contexts';
import { findInChildren } from './utils/findInChildren';

describe('.useStateValue()', () => {
  describe('tests that the hook will destructure state and dispatch', () => {
    it('should mount successfully and desctructure state and dispatch without crashing', () => {
      const ChildComponent = () => {
        const [{ text }] = useStateValue(TestContext);
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
});
