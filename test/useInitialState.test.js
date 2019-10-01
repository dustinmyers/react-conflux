import { testReducer } from './helpers/reducers';
import useInitialState from '../src/hooks/useInitialState';

describe('.useInitialState()', () => {
  describe('tests that a function passed into .useInitialState() as an argument will be invoked', () => {
    it('should invoke the function that is passed into it successfully', () => {
      const spy = jest.fn(str => {
        return 'Testing';
      });
      expect(useInitialState(spy)).toBe('Testing');
    });
  });

  describe('tests that a reducer passed as an argument into .useInitialState() successfully return initialState', () => {
    it('should return an object successfully when the reducer is invoked', () => {
      const initialState = useInitialState(testReducer);
      expect(typeof initialState).toBe('object');
    });

    it('should return state successfully from a reducer', () => {
      const initialState = useInitialState(testReducer);
      expect(initialState.text).toBe('Testing');
    });
  });

  describe('tests that an error that primitive data types, arrays, and objects passed as argument throws an error', () => {
    it('should throw an error when a string literal is passed into it', () => {
      expect(() => {
        return useInitialState('testing');
      }).toThrowError(/reducer is not a function/i);
    });

    it('should throw an error when a number literal is passed into it', () => {
      expect(() => {
        return useInitialState(5);
      }).toThrowError(/reducer is not a function/i);
    });

    it('should throw an error when an object literal is passed into it', () => {
      expect(() => {
        return useInitialState({ object: 'object' });
      }).toThrowError(/reducer is not a function/i);
    });

    it('should throw an error when an array literal is passed into it', () => {
      expect(() => {
        return useInitialState(['array']);
      }).toThrowError(/reducer is not a function/i);
    });
  });

  describe('tests that .useInitialState() generates a random string to invoke the reducer for initialState', () => {
    it('should return a string prepended by @conflux when passed a mock function', () => {
      const spy = jest.fn((state, action) => {
        return action;
      });
      expect(useInitialState(spy).type.includes('@conflux')).toBeTruthy();
    });
  });
});
