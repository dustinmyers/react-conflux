import React from 'react';
import { useInput } from '../../hooks/useInput';
import { useStateValue } from '../../hooks/useStateValue';
import { ADD_TODO } from '../../store/constants';
import { TodoContext } from '../..';

const TodoInput = props => {
  const [value, setValue, handleChanges] = useInput('');
  const { dispatch } = useStateValue(TodoContext);

  const addTodo = e => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: value });
    setValue('');
  };

  return (
    <span>
      <form className="Input" onSubmit={addTodo}>
        <input
          className="Input-text"
          onChange={handleChanges}
          type="text"
          value={value}
          placeholder="Add todo"
          id="input"
        />
        <label htmlFor="input" className="Input-label">
          Add todo
        </label>
      </form>
    </span>
  );
};

export default TodoInput;
