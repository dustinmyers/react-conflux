import React from 'react';

export default function Todo(props) {
  return (
    <div onClick={() => props.toggleCompleted(props.todo.id)}>
      {props.todo.value}
    </div>
  );
}
