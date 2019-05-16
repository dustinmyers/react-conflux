import React, { useReducer, useMemo } from 'react';

export const StateProvider = ({
  reducer,
  initialState,
  StateContext,
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (typeof reducer !== 'function') {
    throw new Error(
      `The reducer must be a function. You might have forgotten to pass your reducer into your StateProvider.`
    );
  }

  if (typeof initialState !== 'object') {
    throw new Error(
      `State must be an object. You probably forgot to pass the initialState object into your StateContext.`
    );
  }

  const value = useMemo(() => {
    return [state, dispatch];
  }, [state]);

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
