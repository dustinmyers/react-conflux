import React from 'react';
import { useStateValue } from 'react-conflux';
import { counterContext, titleContext } from '../store/contexts';
import { INCREMENT, DECREMENT } from '../store/constants';

const Counter = () => {
  const [counterState, counterDispatch] = useStateValue(counterContext);
  const [titleState] = useStateValue(titleContext);
  const increment = e => {
    e.preventDefault();
    counterDispatch({ type: INCREMENT, payload: counterState.count + 1 });
  };
  const decrement = e => {
    e.preventDefault();
    counterDispatch({ type: DECREMENT, payload: counterState.count - 1 });
  };
  return (
    <div>
      <h1>{titleState.title}</h1>
      <p>This is the count from the counterReducer: {counterState.count}</p>
      <button type="button" onClick={increment}>
        Increase
      </button>
      <button type="button" onClick={decrement}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
