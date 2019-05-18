import React, { useReducer, useMemo } from 'react';

/**
 * Create a Context.Provider wrapper for children components wherever it is applied
 * to the component tree. This component can be called multiple times throughtout the
 * application.
 *
 * @param {reducer} reducer A reducer function that contains a switch statement and, ultimately, returns state.
 * The reducer can never be undefined or anything other than a type of function. They should return modified
 * state if the action.type passed into them is defined or their initial state if the action.type
 * passed into them is undefined.
 *
 * @param {initialState} initialState An object containing the intitial state of the application. While the
 * initial state may be an empty object, it must always be of type object and defined.
 *
 * @param {StateContext} StateContext A created Context from the createContext named export from React.
 *
 * @param {children} children The descending compontent tree JSX is passed in and placed inside the
 * Context.Provider.
 *
 * @returns {JSX} Returns a JSX component for a Context.Provider setup and passes in the memoized value
 * as well as the children of the Context component.
 */

export const StateProvider = ({
  reducer,
  initialState,
  StateContext,
  children
}) => {
  // Error messages for the reducer object

  if (typeof reducer !== 'function') {
    throw new Error(
      `The reducer must be a function. You might have forgotten to pass your reducer into your StateProvider.`
    );
  }

  // Error messages for the initialState object

  if (typeof initialState !== 'object' || Array.isArray(initialState)) {
    throw new Error(
      `The initialState must be an object. You probably forgot to pass the initialState object into your StateContext.`
    );
  }

  // Error messages for the StateContext object

  if (Array.isArray(StateContext)) {
    throw new Error(
      `StateContext cannot be an array. Please check what you passed into StateProvider as your StatContext object.`
    );
  }

  if (!StateContext) {
    throw new Error(
      `StateContext is undefined. Please check your createContext method and what you are passing into your StateProvider.`
    );
  }

  // Error messages for the children components held inside StateProvider

  if (
    children === undefined ||
    typeof children !== 'object' ||
    !Object.keys(children).length
  ) {
    throw new Error(
      `StateProvider must contain children components. You probably forgot to wrap it around your components in your JSX.`
    );
  }

  /**
   * Uses the useReducer hook to pass in a reducer and initialState. It returns
   * an array that can be desctructured into state and a dispatch function.
   */

  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * The useMemo hook returns state and dispatch while guarding against unnecessary refreshes of the component
   * tree contained within this StateContext.Provider.
   *
   * It will only update when state changes.
   */

  const value = useMemo(() => {
    return [state, dispatch];
  }, [state]);

  /**
   * The newly instantiated copy of StateContext.Provider is returned as a component from this function
   * to be wrapped around JSX in the application. The value returned from the useMemo hook (an array containing
   * state and dispatch) is passed into the Provider per the requirements for the Context API
   * in the documentation at: https://reactjs.org/docs/context.html
   *
   * This array will be available for desctructuring inside components contained in the state tree with the
   * Conflux useStateValue custom hook.
   */

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
