import React, { useReducer, useMemo } from 'react';

export const StateProvider = ({
  reducer,
  initialState,
  StateContext,
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    return {
      state,
      dispatch
    };
  }, [state]);
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
