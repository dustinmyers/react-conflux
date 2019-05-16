import { useContext } from 'react';

export const useStateValue = StateContext => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      `The useStateValue hook must be used within the Provider of the Context object you have passed to it. Check to make sure you have passed in the correct context object and that the useStateValue hook is within a child of the correct Provider.`
    );
  }
  return context;
};
