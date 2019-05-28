import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

/**
 * Create a Context.Provider wrapper for children components wherever it is applied to the
 * component tree. This component can be called multiple times throughout the application.
 *
 * @param {reducer} reducer A reducer function that contains a switch statement and, ultimately,
 * returns a state object. The reducer can never be undefined or anything other than a type of
 * function. They should return modified state if the action.type passed into them is defined
 * or their initial state if the action.type passed into them is undefined.
 *
 * @param {stateContext} stateContext A Context object created from the createContext function
 * from React.
 *
 * @param {children} children The descending compontent tree JSX is passed in and placed inside
 * the Context.Provider.
 *
 * @returns {JSX} Returns a JSX component for a Context.Provider setup and passes in the memoized
 * value as well as the children of the Context component.
 */

const StateProvider = ({ reducer, stateContext, children }) => {
  // Error messages for the reducer object
  if (typeof reducer !== 'function') {
    throw new Error(
      'The reducer must be a function. You might have forgotten to pass your reducer into your StateProvider.'
    );
  }

  // Error messages for the stateContext object
  if (!stateContext) {
    throw new Error(
      'stateContext prop is undefined. Please check your createContext method and what you are passing into your StateProvider.'
    );
  }

  if (
    children === undefined ||
    typeof children !== 'object' ||
    !Object.keys(children).length
  ) {
    throw new Error(
      'StateProvider must contain children components. You probably forgot to wrap it around your components in your JSX.'
    );
  }

  /**
   * getRandomString is used to create a randomized alpha-numeric string to create the action type
   * for the initial reducer call. This initial reducer call sets returns the initial state object
   * from the reducer that will then be passed into useReducer.
   *
   * It will only update when state changes.
   */

  const getRandomString = () =>
    Math.random()
      .toString(36)
      .substring(7);

  const initialState = reducer(undefined, {
    type: `@conflux${getRandomString()}`
  });

  /**
   * Uses the useReducer hook to pass in a reducer and initialState. It returns
   * an array that can be destructured into state and a dispatch function.
   */

  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * The useMemo hook returns state and dispatch while guarding against unnecessary rerendering of the component
   * tree contained within this stateContext.Provider.
   *
   * It will only update when the state object in value changes, rather than any other state/props outside of
   * these values.
   */

  const value = useMemo(() => {
    return [state, dispatch];
  }, [state]);

  const { Provider } = stateContext;
  /**
   * The newly instantiated copy of Provider is returned as a component from this function
   * to be wrapped around JSX in the application. The value returned from the useMemo hook (an array containing
   * state and dispatch) is passed into the Provider per the requirements for the Context API
   * in the documentation at: https://reactjs.org/docs/context.html
   *
   * This array will be available for destructuring inside components contained in the state tree with
   * react-conflux's custom hook "useStateValue".
   */

  return <Provider value={value}>{children}</Provider>;
};

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  stateContext: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default StateProvider;
