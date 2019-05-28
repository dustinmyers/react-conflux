import { useContext } from 'react';

/**
 * The useStateValue custom hook from Conflux provides a modular, predictable, and easy
 * way to desctructure state and dispatch from the Context API's Consumer whenever needed.
 *
 * @param {stateContext} stateContext An object previously created using React's Context
 * API that contains a Provider and Consumer.
 *
 * @returns {context} Returns a validated context array containing a state object and a
 * dispatch function for use inside of a component.
 */

const useStateValue = stateContext => {
  /**
   * stateContext error messages for undefined and incorrect data types passed into
   * useStateValue hook
   */

  if (stateContext === undefined) {
    throw new Error(
      'The stateContext object is undefined in your useStateValue hook. You probably forgot to pass the stateContext object into your useStateValue hook.'
    );
  }

  if (!stateContext.Provider && !stateContext.Consumer) {
    throw new Error(
      'Incorrect argument passed to the useStateValue hook. You probably passed a variable other than your context object into it.'
    );
  }

  /**
   * The useContext React hook references the Context.Provider closest to it up the component
   * tree. In Conflux, this will always return as an array which is [state, dispatch]. These
   * are returned by the useStateValue hook for use inside the application.
   */

  const context = useContext(stateContext);

  /**
   * context error message for if context returns undefined. This happens when the stateContext
   * passed into the useStateValue hook is used in a component which is not a child of that
   * context's Provider.
   */

  if (context === undefined) {
    throw new Error(
      'The useStateValue hook must be used within the Provider of the Context object you have passed to it. Check to make sure you have passed in the correct context object and that the useStateValue hook is within a child of the correct Provider.'
    );
  }

  /**
   * Return the context of the Context.Provider closest to the useStateValue hook at the time
   * it was called.
   */

  return context;
};

export default useStateValue;
