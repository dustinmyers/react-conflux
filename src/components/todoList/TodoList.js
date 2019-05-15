import React, { useEffect } from 'react';

import Todo from './Todo';
import { useStateValue } from '../../hooks/useStateValue';
import { TOGGLE_TODO } from '../../store/constants';
import { TodoContext, GlobalContext } from '../..';

export default function TodoList() {
  const { state, dispatch } = useStateValue(TodoContext);
  const { state: globalState, dispatch: globalDisptach } = useStateValue(GlobalContext);

  useEffect(() => {
    console.log('mounting');
  }, []);

  console.log(state, globalState);
  const toggleCompleted = id => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  return (
    <>
      {state.todos.map(todo => (
        <Todo key={todo.id} toggleCompleted={toggleCompleted} todo={todo} />
      ))}
      <div className="flex-separator" />
      <div className="count">
        Count: {globalState.count} (from global state, but nested in todo
        provider!)
      </div>
    </>
  );
}
